// ----------------------------------------
// CONTROLLER Post

const {Sequelize, Op} = require('sequelize');
const {Post, User, Com} = require('../models/index');

exports.getAllPost = (req, res, next) => {
    Post.findAll({
        include: User
    })
    .then((post) => {
        res.status(200).json(post)
    })
    .catch((error) => {
        res.status(404).json({error: error})
    });
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
    })
    .then((onePost) => {
        res.status(200).json(onePost)
    })
    .catch((error) => {
        res.status(404).json({error: error})
    });
};

exports.getUserPost = (req, res, next) => {
    Post.findAll({
        where: {
            UserId: req.params.id
        }
    })
     .then((userPost) => {
        res.status(200).json(userPost)
    })
    .catch((error) => {
        res.status(404).json({error: error})
    });
}

exports.postUser = (req, res, next) => {
    Post.create({
        ...req.body.post,
        UserId: req.token.userId
    })
    .then((post) => {
        res.status(200).json(post)
    })
    .catch((error) => {
        res.status(404).json({error: error})
    })
};