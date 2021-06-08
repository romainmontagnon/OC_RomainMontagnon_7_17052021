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