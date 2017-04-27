/*
@author: Kushal Malani
Created on: 04/26/2017
Modified by: Kushal Malani
Modified on: 04/26/2017
*/


/*For Generating and Validating Json Web Tokens*/
/*Todo : Change Expiry time of auth token, change secret and implement refresh token*/
'use strict';

import jwt from 'jsonwebtoken';
import customResponse from './responseMessages';
import logger from './logger';

var secret = "pixelApp";

module.exports = {

	signToken : function (data, type){
		if(type === customResponse.user)
		{
			return jwt.sign({
				_id : data._id,
				userEmail : data.userEmail,
				type : type		
			},secret,{expiresIn : '180d'});
		}
		else
		{
			logger.log(customResponse.noSignToken);
		}		

	},

	validateToken : function (token, type){
		var tokenObj = {};
		try{
			tokenObj = jwt.verify(token, secret);		
		}
		catch(err){
			logger.log(customResponse.decodeError);
			return false;
		}
		if(tokenObj.type === type)
		{
			return tokenObj;
		}	
		else
		{
			return false;
		}
	}
}