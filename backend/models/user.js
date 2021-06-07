const Sequelize = require('sequelize');
const database = require('./connexion');

const User = database.define('User', {
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

User.sync({alter:true});
module.exports = User;