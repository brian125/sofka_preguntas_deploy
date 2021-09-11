const Players = require('../models/Players');
const Questions = require('../models/Questions');

exports.formCreateUser = (req,res) => {
    res.render('create-user', {
        pageName: 'Crear usuario'
    })
}

//Create user
exports.createNewUser = async (req,res,next) => {
    const player = req.body;
    try {
        await Players.create(player);
        req.flash('success', 'user created successfully');
        res.redirect('/log-in');
    } catch (error) {
        const sequelizeErrors = Object.values(error.errors).map(err => err.message);
        console.log(sequelizeErrors);
        
        req.flash('error', sequelizeErrors);
        res.redirect('/create-user');
    }
}

//Log in
exports.formLogIn = (req,res) => {
    res.render('log-in', {
        pageName: 'Iniciar sesión'
    })
}

//Update poinst
exports.updatePointsLevelOne = async (req,res,next) => {
    const user = await Players.findOne({where: {id : req.user.id}});
    
    const {points} = req.body;
    user.points = user.dataValues.points+1;
    await user.save();
    res.redirect('/question2');
}

exports.updatePointsLevelTwo = async (req,res,next) => {
    const user = await Players.findOne({where: {id : req.user.id}});
    
    const {points} = req.body;
    user.points = user.dataValues.points+2;
    await user.save();
    res.redirect('/question3');
}

exports.updatePointsLevelThree = async (req,res,next) => {
    const user = await Players.findOne({where: {id : req.user.id}});
    
    const {points} = req.body;
    user.points = user.dataValues.points+3;
    await user.save();
    res.redirect('/question4');
}

exports.updatePointsLevelFour = async (req,res,next) => {
    const user = await Players.findOne({where: {id : req.user.id}});
    
    const {points} = req.body;
    user.points = user.dataValues.points+4;
    await user.save();
    res.redirect('/question5');
}

exports.updatePointsLevelFive = async (req,res,next) => {
    const user = await Players.findOne({where: {id : req.user.id}});
    
    const {points} = req.body;
    user.points = user.dataValues.points+5;
    await user.save();
    res.redirect('/win');
}