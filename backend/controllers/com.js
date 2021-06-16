// ----------------------------------------
// CONTROLLER Com

const { Sequelize, Op } = require('sequelize');
const { Post, User, Com } = require('../models/index');

exports.getAllCom = (req, res, next) => {
    Com.findAll({
        where: {
            PostId: req.params.PostId
        }
    })
    .then((all) => {
        res.status(200).json(all)
    })
    .catch((error) => {
        res.status(404).json({error})
    })
};

exports.postCom = (req, res, next) => {
    Com.create({
        ...req.body.com,
        PostId: req.params.PostId
    })
    .then((com) => {
        res.status(200).json(com)
    })
    .catch((error) => {
        res.status(404).json({error})
    })
};