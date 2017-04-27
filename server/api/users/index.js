'use strict';

var express = require('express');
var controller = require('./users.controller');

var router = express.Router();

router.post('/userSignup', controller.userSignup);


module.exports = router;
