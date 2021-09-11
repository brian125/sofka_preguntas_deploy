const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
// const session = require('express-session');
const session = require('cookie-session');
const cookieParser = require('cookie-parser');
// const expressValidator = require('express-validator');
const passport = require('./config/passport');
const router = require('./routes');

// BD Settings and models
const db = require('./config/db');
    require('./models/Players');
    require('./models/Categories');
    require('./models/Questions');
    require('./models/Answers');

db.sync().then(() => console.log('DB Conected')).catch(error => console.log(error));

//Development variables
require('dotenv').config({path: 'variables.env'});

//Principal application
const app = express();

//Body Parser to read forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Express validator
// app.use(expressValidator());

//Enable EJS as template engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Views location
app.set('views', path.join(__dirname, './views'));

//static files
app.use(express.static('public'));

//Enable cookie parser
app.use(cookieParser());

//Create session
app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false
}));

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Add flash messages
app.use(flash());

//Middleware (Current date, flash messages)
app.use((req,res,next) => {
    res.locals.messages = req.flash();
    const date = new Date();
    res.locals.year = date.getFullYear();
    next();
});


//Routing
app.use('/', router());

//Read host and port
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

//Add port 
app.listen(port, host, () => {
    console.log('Server it\'s already in use');
});