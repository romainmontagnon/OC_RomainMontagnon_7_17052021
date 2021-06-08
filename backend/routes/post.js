const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');

router.get('/', postCtrl.getAllPost);
// router.post('/', userCtrl.postUser);

module.exports = router;