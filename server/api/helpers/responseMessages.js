/*
@author: Kushal Malani
Created on: 04/26/2017
Modified by: Kushal Malani
Modified on: 04/26/2017
*/
'use strict';
/* Custom Messages */

module.exports = {			
	/**************************Common Response Messages********************************************/																																																																																																																																																																																																																																																																																																																																 	
	user : "pixel-user",
	invalidToken : "Invalid Auth Token",
	noSignToken : "Unable to Sign Token",
	decodeError : "Error in Decoding Token",
	alphaNumeric : "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
	emailValidationFailed : "Incorrect Email Address Format",
	incorrectPasswordLength : "Password needs to be minimum of 8 characters",
	access_code_length : 6,
	internalServerError : "Out of Service. Please Contact Pixel Support",

	/************************User Response Messages****************************************/

	/*User Signup */
	userSignupMissing : "Signup Details Missing. Try Again!!",
	userEmailExists : "Account with this email address Already exists",
	saveResponseError : "Error in saving document to DB",
	userSignupError : "Something went wrong. Please Contact Pixel Support",
	prepareResponseObjectError: "Unable to prepare response object. Please Contact Radar Support",

	/*User Login */
	userLoginFailed :  "Authentication Failed",
	noUser : "No Such User exists. Signup on Radar",	
	userLoginMissing : "Login Details Missing. Try Again",
	updateLoginStatusFailed : "Unable to update Login Status and Time",
	responseObjError : "Error in preparing response object",
	userLoginError : "Something went wrong. Please Contact Radar Support",
	deactiveUser : "Your account has been deactivated. Contact Radar Support",
	
}