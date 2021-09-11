const Sequelize = require('sequelize');

const Players = require('../models/Players');
const Categories = require('../models/Categories');
const Questions = require('../models/Questions');
const Answers = require('../models/Answers');

//Question 1
exports.selectQuestionLevelOne = async (req,res,next) => {
    const queries = [];
    queries.push(Categories.findOne({
        where: { id: 1}
    }));
    queries.push(Players.findOne({
        where: { id : req.user.id}
    }));
    queries.push(Questions.findOne({
        where: {categoryId: 1},
        order: Sequelize.literal('random()'),
        limit: 1
    }));

    const[category, player, question] = await Promise.all(queries);

    const answers = await Answers.findAll({
        where: {questionId : question.id},
        order: Sequelize.literal('random()'),
        limit: 5
    });

    res.render('question1',{
        pageName: 'Pregunta 1',
        category,
        player,
        question,
        answers
    });
}

//Question 2
exports.selectQuestionLevelTwo = async (req,res,next) => {
    const queries = [];
    queries.push(Categories.findOne({
        where: { id: 2}
    }));
    queries.push(Players.findOne({
        where: { id : req.user.id}
    }));
    queries.push(Questions.findOne({
        where: {categoryId: 2},
        order: Sequelize.literal('random()'),
        limit: 1
    }));

    const[category, player, question] = await Promise.all(queries);

    const answers = await Answers.findAll({
        where: {questionId : question.id},
        order: Sequelize.literal('random()'),
        limit: 5
    });

    res.render('question2', {
        pageName: 'Pregunta 2',
        category,
        player,
        question,
        answers
    });
}

//Question 3
exports.selectQuestionLevelThree = async (req,res,next) => {
    const queries = [];
    queries.push(Categories.findOne({
        where: { id: 3}
    }));
    queries.push(Players.findOne({
        where: { id : req.user.id}
    }));
    queries.push(Questions.findOne({
        where: {categoryId: 3},
        order: Sequelize.literal('random()'),
        limit: 1
    }));

    const[category, player, question] = await Promise.all(queries);

    const answers = await Answers.findAll({
        where: {questionId : question.id},
        order: Sequelize.literal('random()'),
        limit: 5
    });

    res.render('question3', {
        pageName: 'Pregunta 3',
        category,
        player,
        question,
        answers
    });
}

//Question 4
exports.selectQuestionLevelFour = async (req,res,next) => {
    const queries = [];
    queries.push(Categories.findOne({
        where: { id: 4}
    }));
    queries.push(Players.findOne({
        where: { id : req.user.id}
    }));
    queries.push(Questions.findOne({
        where: {categoryId: 4},
        order: Sequelize.literal('random()'),
        limit: 1
    }));

    const[category, player, question] = await Promise.all(queries);

    const answers = await Answers.findAll({
        where: {questionId : question.id},
        order: Sequelize.literal('random()'),
        limit: 5
    });

    res.render('question4', {
        pageName: 'Pregunta 4',
        category,
        player,
        question,
        answers
    });
}

//Question 4
exports.selectQuestionLevelFive = async (req,res,next) => {
    const queries = [];
    queries.push(Categories.findOne({
        where: { id: 5}
    }));
    queries.push(Players.findOne({
        where: { id : req.user.id}
    }));
    queries.push(Questions.findOne({
        where: {categoryId: 5},
        order: Sequelize.literal('random()'),
        limit: 1
    }));

    const[category, player, question] = await Promise.all(queries);

    const answers = await Answers.findAll({
        where: {questionId : question.id},
        order: Sequelize.literal('random()'),
        limit: 5
    });

    res.render('question5', {
        pageName: 'Pregunta 5',
        category,
        player,
        question,
        answers
    });
}

//When the player decide to retire
exports.retire = async (req,res,next) => {
    const player = await Players.findOne({
        where: { id : req.user.id}
    })

    res.render('retire', {
        pageName: 'Retire',
        player
    })
}

//When the player lose
exports.lose = async (req,res,next) => {
    const player = await Players.findOne({
        where: { id : req.user.id}
    })

    res.render('lose', {
        pageName: 'Lose',
        player
    })
}

//When the player win
exports.win = async (req,res,next) => {
    const player = await Players.findOne({
        where: { id : req.user.id}
    })

    res.render('win', {
        pageName: 'win',
        player
    })
}