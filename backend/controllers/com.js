// ----------------------------------------
// CONTROLLER Com

const { Sequelize, Op } = require('sequelize');
const { Post, User, Com } = require('../models/index');
const { modifyPost } = require('./post');

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

exports.modifyCom = (req, res, next) => {
    Com.findOne({
        where: {
            id: req.params.id
        }
    })
    .then((modifyCom) => {
        if(req.token.userId == modifyCom.UserId /* || req.token.admin*/){
            Com.update({
                ...req.body.com
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
            res.status(403).json({message: "vous n'avez pas les droits pour cette action" })
        }
    })
    .catch((error) => {
        res.status(404).json({error: error})
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
                res.status(200).json({message: "Commentaire supprimé"})
            })
            .catch((error) => {
                res.status(404).json({error: error})
            })
        } else {
            res.status(403).json({message: "vous n'avez pas les droits pour cette action sur les commentaires"});
        }
    })
    .catch((error) => {
        res.status(404).json({error: error})
    })
};
// delete cf delete post et update post