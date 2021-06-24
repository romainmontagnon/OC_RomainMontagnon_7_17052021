const express = require('express');
const router = express.Router();

const comCtrl = require('../controllers/com');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

// ----------------------------------------
// ROUTES Post (publication)
router.post('/', auth, multer, comCtrl.postCom);
router.put('/:id', auth, multer, comCtrl.modifyCom);
router.delete('/:id', auth, comCtrl.deleteCom);
// ----------------------------------------

module.exports = router;