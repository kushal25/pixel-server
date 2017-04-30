/*
@author: Kushal Malani
Created on: 02/15/2016
Modified by: Kushal Malani
Modified on: 02/19/2016
*/

'use strict';
/*Handler used to hash passwords */

import bcrypt from 'bcrypt-nodejs';
import Q from 'q';
import logger from './logger';

module.exports = {

	hash : function(password) {
	    var deferred = Q.defer();
	    bcrypt.genSalt(10, function(err, salt) {
	        if (err) {
	            deferred.reject();
	        }
	        bcrypt.hash(password, salt, null, function(err, hash) {
	            if (err) {
	            	logger.log(" Error in Hashing: " + err);
	                deferred.reject();
	            } else {
	                password = hash;	              
	                deferred.resolve(password);
	            }
	        });
	    });
	    return deferred.promise;
	},

	compare : function(userPassword , hash)
	{
		return bcrypt.compareSync(userPassword, hash);
	}
}
