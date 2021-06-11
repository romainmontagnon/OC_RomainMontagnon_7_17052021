const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

// ----------------------------------------
// ROUTES Post (publication)
router.get('/', postCtrl.getAllPost);
router.get('/:id', postCtrl.getOnePost);
router.get('/user/:id', postCtrl.getUserPost);

router.post('/', auth, postCtrl.postUser);
// ----------------------------------------

module.exports = router;