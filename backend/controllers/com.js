// ----------------------------------------
// CONTROLLER Com

const { Sequelize, Op } = require('sequelize');
const { Post, User, Com } = require('../models/index');

exports.postCom = (req, res, next) => {
    Com.create({
        ...req.body.com,
        UserId: req.token.userId
    })
    .then((com) => {
        res.status(200).json(com)
    })
    .catch((error) => {
        res.status(404).json({error})
    })
};

// delete cf delete post et update post