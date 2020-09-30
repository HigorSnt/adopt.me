const express = require('express');
const multer = require('multer');
const router = express.Router();

const uploadConfiguration = require('../config/upload');
const upload = multer(uploadConfiguration);

const PetController = require('../controllers/PetController');

router.post('/', upload.single('photo'), PetController.create);
router.get('/', PetController.index);
router.get('/:id', PetController.show);

module.exports = router;
