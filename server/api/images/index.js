'use strict';

import express from 'express';
var controller = require('./images.controller');
import multer from 'multer';
import path from 'path';
var config = require('../../config/environment');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, config.imageStorePath);
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({ storage : storage});

var router = express.Router();

router.post('/writeData', upload.single('img'), controller.writeData);

module.exports = router;
