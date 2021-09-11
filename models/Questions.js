const Sequelize = require('sequelize');
const db = require('../config/db');
const Categories = require('./Categories');

const Questions = db.define('questions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: Sequelize.STRING(150)
});

Questions.belongsTo(Categories);

module.exports = Questions;