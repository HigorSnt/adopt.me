var express = require('express');
var router = express.Router();

const OngController = require('../controllers/OngController');

router.post('/', OngController.create);
router.get('/:cnpj', OngController.show);

module.exports = router;
