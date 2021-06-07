const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.get('/', userCtrl.getAllUser);
router.post('/', userCtrl.postUser);

module.exports = router;