const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

// ----------------------------------------
// ROUTES Post (publication)
router.get('/', auth, postCtrl.getAllPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.get('/user/:UserId', auth, postCtrl.getUserPost);

router.post('/', auth, postCtrl.postUser);
router.put('/:id', auth, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
// ----------------------------------------

module.exports = router;