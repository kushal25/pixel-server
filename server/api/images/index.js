'use strict';

var express = require('express');
var controller = require('./images.controller');

var router = express.Router();

router.post('/writeData', controller.writeData);

module.exports = router;
