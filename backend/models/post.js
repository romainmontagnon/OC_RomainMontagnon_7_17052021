const Sequelize = require('sequelize');
const database = require('./connexion');

const Post = database.define('Post', {
    message: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING
    }
});

module.exports = Post; 