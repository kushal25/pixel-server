'use strict';

var express = require('express');
var controller = require('./users.controller');

var router = express.Router();

router.post('/userSignup', controller.userSignup);
router.post('/userLogin', controller.userLogin);


module.exports = router;
