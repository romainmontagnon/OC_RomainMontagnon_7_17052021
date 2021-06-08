require('dotenv').config();
const Sequelize = require('sequelize');
const {User} = require('../models/index');
const bcrypt = require('bcrypt');

exports.getAllUser = (req, res, next) => {
    User.findAll()
    .then((user) => {
        res.status(200).json(user)
    })
    .catch((error) => {
        res.status(404).json({error: error})
    });
};

// exports.postUser = (req, res, next) => {
//     User.create({
//         ...req.body.user
//     })
//     .then((user) => {
//         res.status(200).json(user)
//     })
//     .catch((error) => {
//         res.status(404).json({error: error})
//     });
// };

exports.userSignUp = (req, res, next) => {
    bcrypt.hash(req.body.user.password, parseInt(process.env.HASH_ROUND))
        .then(hash => {
            User.create({
                emailAdress : req.body.user.emailAdress,
                firstName   : req.body.user.firstName,
                lastName    : req.body.user.lastName,
                password    : hash
            })            
            .then((user) => {
                res.status(200).json(user)
            })
            .catch((error) => {
                res.status(404).json({error: error})
            });
        })
        .catch(error => res.status(500).json({error}));
};

exports.userLogin = (req, res, next) => {
    User.create({
        ...req.body.user
    })
    .then((user) => {
        res.status(200).json(user)
    })
    .catch((error) => {
        res.status(404).json({error: error})
    });
};