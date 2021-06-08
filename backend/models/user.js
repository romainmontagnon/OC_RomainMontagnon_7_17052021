// ----------------------------------------
// MODEL User

const Sequelize = require('sequelize');
const database = require('./connexion');

const User = database.define('User', {
    emailAdress: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            isEmail: {
                msg: "Please type email adress",
            },
        },
    },
    firstName: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    lastName: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = User;