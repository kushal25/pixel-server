/*
@author: Kushal Malani
Created on: 04/26/2017
Modified by: Kushal Malani
Modified on: 04/26/2017
*/

'use strict';
/*Schema for Command Admin */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var userInfoSchema = new mongoose.Schema({
    accessCode: {
        type: String
    },
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    userPassword: {
        type: String,
        required: true        
    },
    userPhoneNumber: {
        type: String,
        required: true
    },
    userStatus: Number,
    image_ids: [{
        type: mongoose.Schema.ObjectId,
        unique: true,
        ref: 'images'
    }],
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastModifiedAt: {
        type: Date,
        default: Date.now
    },
    lastLoginAt: {
        type: Date,
        default: Date.now
    },
    lastLogoutAt: {
        type: Date
    },
    loginStatus: Number
});

/* for hashing password */
userInfoSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('userPassword')) {
        return next();
    }
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.userPassword, salt, null, function(err, hash) {
            if (err) {
                return next(err);
            }
            user.userPassword = hash;
            next();
        });
    });
});

module.exports = mongoose.model('users', userInfoSchema);