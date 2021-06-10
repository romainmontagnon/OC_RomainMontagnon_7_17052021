const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');

// ----------------------------------------
// ROUTES Post (publication)
router.get('/', postCtrl.getAllPost);
router.get('/postdetails', postCtrl.getOnePost);

router.post('/', postCtrl.postUser);
// ----------------------------------------

module.exports = router;