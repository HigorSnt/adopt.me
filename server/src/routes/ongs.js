var express = require('express');
var router = express.Router();

const authentication = require('../middlewares/authentication');

const OngController = require('../controllers/OngController');

router.post('/', OngController.create);
router.get('/:cnpj', OngController.show);
router.use(authentication).get('/', OngController.getOngPets);

module.exports = router;
