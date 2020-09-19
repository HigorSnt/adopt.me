const express = require('express');
const router = express.Router();

const SpecieController = require('../controllers/SpecieController');

router.get('/', SpecieController.index);

module.exports = router;
