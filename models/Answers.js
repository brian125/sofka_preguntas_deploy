const Sequelize = require('sequelize');
const db = require('../config/db');
const Questions = require('./Questions');

const Answers = db.define('answers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: Sequelize.STRING(150),
    type: Sequelize.INTEGER
});

Answers.belongsTo(Questions);

module.exports = Answers;