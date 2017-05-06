'use strict';

var express = require('express');
var controller = require('./users.controller');

var router = express.Router();

router.post('/userSignup', controller.userSignup);
router.post('/userLogin', controller.userLogin);
router.get('/userInfo', controller.userInfo);


module.exports = router;
