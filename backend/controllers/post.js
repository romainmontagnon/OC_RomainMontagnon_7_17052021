// ----------------------------------------
// CONTROLLER Post

const Sequelize = require('sequelize');
const {Post, User} = require('../models/index');

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
        where: { id: req.body.post.id } 
    })
    .then((onePost) => {
        res.status(200).json(onePost)
    })
    .catch((error) => {
        res.status(404).json({error: error})
    });
};

exports.postUser = (req, res, next) => {
    Post.create({
        ...req.body.post
    })
    .then((post) => {
        res.status(200).json(post)
    })
    .catch((error) => {
        res.status(404).json({error: error})
    })
};