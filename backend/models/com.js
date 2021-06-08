// ----------------------------------------
// MODEL Com

const Sequelize = require('sequelize');
const database = require('./connexion');

const Com = database.define('Com', {
    message: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING
    }
});

module.exports = Com; 