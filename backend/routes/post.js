const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

// ----------------------------------------
// ROUTES Post (publication)
router.get('/', postCtrl.getAllPost);
router.get('/:id', postCtrl.getOnePost);
router.get('/user/:UserId', postCtrl.getUserPost);

router.post('/:UserId', auth, postCtrl.postUser);
router.put('/:id', auth, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
// ----------------------------------------

module.exports = router;