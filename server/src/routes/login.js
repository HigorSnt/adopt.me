var express = require('express');
var router = express.Router();

const LoginController = require('../controllers/LoginController');

router.post('/', LoginController.create);

module.exports = router;
