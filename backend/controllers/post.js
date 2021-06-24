// ----------------------------------------
// CONTROLLER Post

const { Sequelize, Op } = require('sequelize');
const { Post, User, Com } = require('../models/index');
const fs = require('fs-extra');

exports.getAllPost = (req, res, next) => {
    Post.findAll({
            include: [
                User,
                {
                    model: Com,
                    include: User
                }
            ]
        })
        .then((post) => {
            res.status(200).json(post)
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        });
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({
            include: [
                User,
                {
                    model: Com,
                    include: User
                }
            ],
            where: {
                id: req.params.id
            }
        })
        .then((onePost) => {
            res.status(200).json(onePost)
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        });
};

exports.getUserPost = (req, res, next) => {
    Post.findAll({
            where: {
                UserId: req.params.UserId
            }
        })
        .then((userPost) => {
            res.status(200).json(userPost)
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        });
}

exports.postUser = (req, res, next) => {
    Post.create({
            ...req.body.post,
            // image: `${req.protocol}://${req.get('host')}/uploads/post/${req.file.filename}`,
            image: `${req.protocol}://${req.host}/uploads/post/${req.body.post.image}`,
            UserId: req.token.userId
        })
        .then((post) => {
            res.status(200).json(post)
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        })
};

exports.modifyPost = (req, res, next) => {
    Post.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((onePost) => {
            if (req.token.userId == onePost.UserId /*|| req.token.admin*/ ) {
                Post.update({
                        ...req.body.post,
                        image: `${req.protocol}://${req.get('host')}/uploads/post/${req.file.filename}`
                    }, {
                        where: {
                            id: req.params.id
                        }
                    })
                    .then((update) => {
                        res.status(200).json(update)
                    })
                    .catch((error) => {
                        res.status(404).json({ error: error })
                    })
            } else {
                res.status(403).json({ message: "vous n'avez pas les droits pour cette action" });
            }
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        });
};

exports.deletePost = (req, res, next) => {
    Post.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((deletePost) => {
            if (req.token.userId == deletePost.UserId /* || req.token.admin*/ ) {
                // fs.remove('')
                //     .then()
                //     .catch()
                Post.destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                    .then(() => {
                        res.status(200).json({ message: "Post supprimé" })
                    })
                    .catch((error) => {
                        res.status(404).json({ error: error })
                    })
            } else {
                res.status(403).json({ message: "vous n'avez pas les droits pour cette action sur les publications" });
            }
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        })
};