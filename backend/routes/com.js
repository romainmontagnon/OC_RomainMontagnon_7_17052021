const express = require('express');
const router = express.Router();

const comCtrl = require('../controllers/com');
const auth = require('../middleware/auth');

// ----------------------------------------
// ROUTES Post (publication)

router.post('/', auth, comCtrl.postCom);
// router.put('/:id', auth, comCtrl.modifyPost);
// router.delete('/:id', auth, comCtrl.deletePost);
// ----------------------------------------

module.exports = router;