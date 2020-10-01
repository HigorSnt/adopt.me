const express = require('express');
const multer = require('multer');
const router = express.Router();

const uploadConfiguration = require('../config/upload');
const upload = multer(uploadConfiguration);

const authentication = require('../middlewares/authentication');

const PetController = require('../controllers/PetController');

router.get('/', PetController.index);
router.get('/:id', PetController.show);

router
  .use(authentication)
  .post('/', upload.single('photo'), PetController.create);

module.exports = router;
