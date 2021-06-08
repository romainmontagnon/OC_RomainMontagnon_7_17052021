const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

// ----------------------------------------
// ROUTES DE TEST a supprimer en fin de dev
router.get('/', userCtrl.getAllUser);
//router.post('/', userCtrl.postUser);
// ----------------------------------------

// ----------------------------------------
// ROUTES User
// Inscription
router.post('/signup', userCtrl.userSignUp);
// Identification
router.post('/login', userCtrl.userLogin);
// ----------------------------------------

module.exports = router;