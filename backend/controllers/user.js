// ----------------------------------------
// CONTROLLER User

require('dotenv').config();
const Sequelize = require('sequelize');
const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs-extra');

exports.getAllUser = (req, res, next) => {
    User.findAll()
        .then((user) => {
            res.status(200).json(user)
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        });
};

exports.userSignUp = (req, res, next) => {
    bcrypt.hash(req.body.user.password, parseInt(process.env.HASH_ROUND))
        .then(hash => {
            User.create({
                    emailAdress: req.body.user.emailAdress,
                    firstName: req.body.user.firstName,
                    lastName: req.body.user.lastName,
                    password: hash
                })
                .then((user) => {
                    res.status(200).json(user)
                })
                .catch((error) => {
                    res.status(404).json({ error: error })
                });
        })
        .catch(error => res.status(500).json({ error }));
};

exports.userLogin = (req, res, next) => {
    User.findOne({
            where: {
                emailAdress: req.body.user.emailAdress
            }
        })
        .then((user) => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur ou mot de passe non valide, erreur A100!' })
            }
            bcrypt.compare(req.body.user.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Utilisateur ou mot de passe non valide, erreur A101!' })
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign({ userId: user.id },
                            process.env.TOKEN_KEY, { expiresIn: '24h' }
                        ),
                    });
                })
                .catch((error) => {
                    res.status(401).json({ error: 'erreur A102' })
                });
        })
        .catch((error) => {
            res.status(404).json({ error: 'erreur A103' })
        });
};

exports.userDelete = (req, res, next) => {
    User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((userToDelete) => {
            bcrypt.compare(req.body.user.password, userToDelete.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Utilisateur ou mot de passe non valide, erreur A201!' })
                    } else if (req.token.userId == userToDelete.id && req.body.user.emailAdress == userToDelete.emailAdress) {
                        User.destroy({
                                where: {
                                    id: req.params.id
                                }
                            })
                            .then(() => {
                                res.status(200).json({ message: "User supprimé" })
                            })
                            .catch((error) => {
                                res.status(404).json({ error: error })
                            })
                    } else {
                        res.status(401).json({ error: 'erreur A102' });
                    };
                })
                .catch((error) => {
                    res.status(401).json({ error: 'erreur A102' })
                });
        })
        .catch((error) => {
            res.status(404).json({ error: 'erreur A103' })
        });
};

exports.userUpdate = (req, res, next) => {
    User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((user) => {
            if (req.token.userId == user.id /*|| req.token.admin*/ ) {
                bcrypt.hash(req.body.user.password, parseInt(process.env.HASH_ROUND))
                    .then((hash) => {
                        User.update({
                                password: hash
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
                    })
                    .catch((error) => {
                        res.status(500).json({ error })
                    });

            } else {
                res.status(401).json({ error: 'erreur A102' });
            }
        })
        .catch((error) => {
            res.status(404).json({ error: 'erreur A103' })
        })
};