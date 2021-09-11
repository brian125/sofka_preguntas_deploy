const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Players = require('../models/Players');

passport.use(new LocalStrategy({
        usernameField : 'user',
        passwordField : 'password'
    },
    async (user, password, next) => {
        const player = await Players.findOne({
            where: {user}
        });

        if(!player) return next(null, false, {
                message: 'Username doesn\'t exist'
            });
        

        const verifyPass = player.validatePassword(password);

        if(!verifyPass) return next(null, false, {
                message: 'Invalid password'
            });
        
        return next(null, player);
    }
))

passport.serializeUser(function (player, cb) {
    cb(null, player);
});

passport.deserializeUser(function (player, cb) {
    cb(null, player);
});

module.exports = passport;