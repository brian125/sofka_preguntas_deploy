const Sequelize = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcrypt-nodejs');

const Players = db.define('players', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: {
            args: true,
            msg: 'User alreary exist'
        },
        validate: {
            isUnique: function (value, next) {
                var self = this;
                Players.findOne({where: {user: value}})
                    .then(function (player) {
                        if(player && self.id !== player.id) {
                            return next('User already exist');
                        }
                            return next();
                    }).catch((err) => {
                        return next(err);
                    });
            }
        }
    },
    password: {
        type: Sequelize.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Password can\'t be empty'
            }
        }  
    },
    points: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    hooks: {
        beforeCreate(player) {
            player.password = bcrypt.hashSync(player.password, bcrypt.genSaltSync(10), null);
        }
    }
});

//Method to compare passwords
Players.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = Players;