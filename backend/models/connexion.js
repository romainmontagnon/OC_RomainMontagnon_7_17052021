// ----------------------------------------
// Database connection

require('dotenv').config();
const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig');

const database = new Sequelize(`${dbConfig.DATABASE}`, `${dbConfig.USERNAME}`, `${dbConfig.PASSWORD}`, {
    host: `${dbConfig.HOST}`,
    dialect: `${dbConfig.DIALECT}`
});
database.authenticate()
    .then(() => {
        console.log('Connection established successfully to the database via cnonnexio.js');
    })
    .catch(err => {
        console.error('Unable to connect to the database via connexion.js:', err);
    });

module.exports = database;