const express = require('express');
const router = express.Router();

const authentication = require('../middlewares/authentication');

const PetController = require('../controllers/PetController');

router.get('/', PetController.index);
router.get('/:id', PetController.show);

router.use(authentication).post('/', PetController.create);

module.exports = router;
