require('dotenv').config();
const express = require('express');
const user = require('./routes/user');
const post = require('./routes/post');
const com = require('./routes/com');
const app = express();

// ----------------------------------------
// MIDDLEWARES

// Headers configuration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

// Routes
app.use('/api/user', user);
app.use('/api/post', post);
app.use('/api/com', com);
// ----------------------------------------

module.exports = app;