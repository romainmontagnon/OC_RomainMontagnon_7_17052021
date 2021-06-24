// ----------------------------------------
// CONTROLLER Com

const { Sequelize, Op } = require('sequelize');
const { Post, User, Com } = require('../models/index');
const { modifyPost } = require('./post');
const fs = require('fs-extra');

exports.postCom = (req, res, next) => {
    let postComReq = req.file ? {
        // PARSER la chaine de caractere pour la convertir en objet car elle arrive comme string
        ...JSON.parse(req.body.com),
        image: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
    } : {
        // PARSER la chaine de caractere pour la convertir en objet car elle arrive comme string
        ...JSON.parse(req.body.com)
    };
    Com.create({
            // on destrcuture postReq avec les ...
            ...postComReq,
            UserId: req.token.userId
        })
        .then((com) => {
            res.status(200).json(com)
        })
        .catch((error) => {
            res.status(404).json({ error })
        })
};

exports.modifyCom = (req, res, next) => {
    Com.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((modifyCom) => {
            if (req.token.userId == modifyCom.UserId || req.token.isAdmin == true) {
                let modifyComReq = req.file ? {
                    // PARSER la chaine de caractere pour la convertir en objet car elle arrive comme string
                    ...JSON.parse(req.body.com),
                    image: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
                } : {
                    // PARSER la chaine de caractere pour la convertir en objet car elle arrive comme string
                    ...JSON.parse(req.body.com),
                    image: null
                };
                Com.update({
                        // on destrcuture postReq avec les ...
                        ...modifyComReq
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
                res.status(403).json({ message: "vous n'avez pas les droits pour cette action" })
            }
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        })
};

exports.deleteCom = (req, res, next) => {
    Com.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(async(deleteCom) => {
            if (req.token.userId == deleteCom.UserId || req.token.isAdmin == true) {
                if (deleteCom.image != null) {
                    const filename = deleteCom.image.split('/uploads/')[1];
                    await fs.unlink(`uploads/${filename}`);
                }
                Com.destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                    .then(() => {
                        res.status(200).json({ message: "Commentaire supprimé" })
                    })
                    .catch((error) => {
                        res.status(404).json({ error: error })
                    })
            } else {
                res.status(403).json({ message: "vous n'avez pas les droits pour cette action sur les commentaires" });
            }
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        })
};
// delete cf delete post et update post