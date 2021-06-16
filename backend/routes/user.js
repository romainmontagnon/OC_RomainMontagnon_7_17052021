const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

// ----------------------------------------
// ROUTES Admin
router.get('/', auth, userCtrl.getAllUser);
// ----------------------------------------

// ----------------------------------------
// ROUTES User
// Inscription
router.post('/signup', userCtrl.userSignUp);
// Identification
router.post('/login', userCtrl.userLogin);
// ----------------------------------------

module.exports = router;