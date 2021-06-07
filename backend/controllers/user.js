const Sequelize = require('sequelize');
const User = require('../models/user')

exports.getAllUser = (req, res, next) => {
    User.findAll()
    .then((user) => {
        res.status(200).json(user)
    })
    .catch((error) => {
        res.status(404).json({error: error})
    });
};

exports.postUser = (req, res, next) => {
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