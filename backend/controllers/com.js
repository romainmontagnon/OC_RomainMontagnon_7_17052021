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

exports.deleteCom = (req, res, next) => {
    Com.findOne({
        where: {
            id: req.params.id
        }
    })
    .then((deleteCom) => {
        if(req.token.userId == deleteCom.UserId /*|| req.token.admin */){
            Com.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                res.status(200).json({message: "Post supprimé"})
            })
            .catch((error) => {
                res.status(404).json({error: error})
            })
        } else {
            res.status(403).json({message: "vous n'avez pas les droits pour cette action"});
        }
    })
    .catch()
};
// delete cf delete post et update post