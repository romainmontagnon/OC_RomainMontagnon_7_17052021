require('dotenv').config();
const express = require('express');
const user = require('./routes/user');
const post = require('./routes/post');
const app = express();

// Middlewares
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/api/user', user);
app.use('/api/post', post);

module.exports = app;