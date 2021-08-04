// ----------------------------------------
// CONTROLLER User

require('dotenv').config();
const Sequelize = require('sequelize');
const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs-extra');

exports.getAllUser = (req, res, next) => {
    if (req.token.isAdmin) {
        User.findAll()
            .then((user) => {
                res.status(200).json(user)
            })
            .catch((error) => {
                res.status(404).json({ error: error })
            });
    } else {
        res.status(405).json({ message: 'it is forbiden' })
    }
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
                    res.status(200).json({
                        ...user,
                        signUp: true
                    })
                })
                .catch((error) => {
                    res.status(404).json({
                        error: error,
                        signUp: false
                    })
                });
        })
        .catch(error => res.status(500).json({
            error,
            signUp: false
        }));
};

exports.userLogin = (req, res, next) => {
    User.findOne({
            where: {
                emailAdress: req.body.user.emailAdress
            }
        })
        .then((user) => {
            if (!user) {
                return res.status(401).json({
                    logged: false,
                    error: 'Utilisateur ou mot de passe non valide, erreur A100!'
                })
            }
            bcrypt.compare(req.body.user.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({
                            error: 'Utilisateur ou mot de passe non valide, erreur A101!',
                            logged: false
                        })
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign({ userId: user.id, isAdmin: user.isAdmin },
                            process.env.TOKEN_KEY, { expiresIn: '24h' },
                        ),
                        firstName: user.firstName,
                        lastName: user.lastName,
                        logged: true,
                        isAdmin: user.isAdmin
                    });
                })
                .catch((error) => {
                    res.status(401).json({
                        error: 'erreur A102',
                        logged: false
                    })
                });
        })
        .catch((error) => {
            res.status(404).json({
                error: 'erreur A103',
                logged: false
            })
        });
};

exports.userDelete = (req, res, next) => {
    User.findOne({
            where: {
                id: req.body.user.userId
            }
        })
        .then((userToDelete) => {
            if (req.token.isAdmin) {
                User.destroy({
                        where: {
                            id: req.body.user.userId
                        }
                    })
                    .then(() => {
                        res.status(200).json({ message: "User supprimé" })
                    })
                    .catch((error) => {
                        res.status(404).json({ error: error })
                    })
            } else {
                bcrypt.compare(req.body.user.password, userToDelete.password)
                    .then((valid) => {
                        if (!valid) {
                            return res.status(401).json({ error: 'Utilisateur ou mot de passe non valide, erreur A201!' })
                        } else if (req.token.userId == userToDelete.id && req.body.user.emailAdress == userToDelete.emailAdress || req.token.isAdmin == true) {
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
            }
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
            if (req.token.userId == user.id || req.token.isAdmin == true) {
                bcrypt.hash(req.body.user.password, parseInt(process.env.HASH_ROUND))
                    .then((hash) => {
                        User.update({
                                password: hash,
                                firstName: req.body.user.firstName,
                                lastName: req.body.user.lastName
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