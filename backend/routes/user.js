const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.get('/', userCtrl.getAllUser);
//router.post('/', userCtrl.postUser);

// Inscription
router.post('/signup', userCtrl.userSignUp);
// Identification
router.post('/login', userCtrl.userLogin);

module.exports = router;