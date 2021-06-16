const express = require('express');
const router = express.Router();

const comCtrl = require('../controllers/com');
const auth = require('../middleware/auth');

// ----------------------------------------
// ROUTES Post (publication)
router.get('/:PostId', comCtrl.getAllCom);
// router.get('/:id', comCtrl.getOnePost);
// router.get('/user/:UserId', comCtrl.getUserPost);

router.post('/:PostId', auth, comCtrl.postCom);
// router.put('/:id', auth, comCtrl.modifyPost);
// router.delete('/:id', auth, comCtrl.deletePost);
// ----------------------------------------

module.exports = router;