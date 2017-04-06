/*
@author: Kushal Malani
Created on: 04/04/2017
Modified by: Kushal Malani
Modified on: 04/04/2017
*/

'use strict';
/*Schema for Command Admin */
var mongoose = require('mongoose');

var imageInfoSchema = new mongoose.Schema({
    imageName: {
        type: String,
        required: true,
        unique: true
    },
    imageType: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true,
        unique: true        
    },
    imageSize: {
        type: Number,
        required: true
    },
    imageStatus: Number,
    description: String,
    uploadedAt: {
        type: Date,
        default: Date.now
    },
    lastModifiedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('images', imageInfoSchema);