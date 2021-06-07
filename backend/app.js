require('dotenv').config();
const express = require('express');
const user = require('./routes/user');
const app = express();

// Connexion a la base de données
// const Sequelize = require('sequelize');
// const dbConfig = require('./config/dbConfig');
// const database = new Sequelize(`${dbConfig.DATABASE}`, `${dbConfig.USERNAME}`, `${dbConfig.PASSWORD}`, {
//     host: `${dbConfig.HOST}`,
//     dialect: `${dbConfig.DIALECT}`
// });
// database.authenticate()
//     .then(() => {
//         console.log('Connection established successfully to the database via app.js');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database via app.js:', err);
//     });

// Middlewares
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/api/user', user);

module.exports = app;