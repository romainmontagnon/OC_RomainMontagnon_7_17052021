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

// Modifcation
router.put('/modifyuser/:id', auth, userCtrl.userUpdate);

// Suppression
router.delete('/delete/:id', auth, userCtrl.userDelete);
// ----------------------------------------

module.exports = router;