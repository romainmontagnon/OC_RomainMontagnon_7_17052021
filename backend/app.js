require('dotenv').config();
const express = require('express');
const user = require('./routes/user');
const post = require('./routes/post');
const com = require('./routes/com');
const app = express();
const path = require('path');
const helmet = require('helmet');
const xss = require('xss-advanced');

// ----------------------------------------
// MIDDLEWARES

app.use(helmet({
    crossOriginEmbedderPolicy: true,
    crossOriginOpenerPolicy: {
        policy: "same-origin-allow-popups"
    },
    expectCt: ({
        maxAge: 86400
            /* maxAge: 1 day */
    }),
    htsts: ({
        maxAge: 15552000,
        /* maxAge: 180 days */
        includeSubDomains: true
    })
}));

// Headers configuration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// body parser
app.use(express.json());

app.use(xss());

// chemin d'affichage des images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// Routes
app.use('/api/user', user);
app.use('/api/post', post);
app.use('/api/com', com);
// ----------------------------------------

module.exports = app;