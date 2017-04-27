/*
@author: Kushal Malani
Created on: 04/26/2017
Modified by: Kushal Malani
Modified on: 04/26/2017
*/
'use strict';
/*Http Status Codes  */

var obj,httpCode;
module.exports  = {
	obj : {
		200 : "Success",
		204 : "No Content",
		400 : "Bad Request",
		401 : "Unauthorized Access",//For Authentication
		403 : "Forbidden",
		409 : "Conflict",
		500 : "Internal Server Error" //When unexpected conditions are encountered		
	},
	httpCode : {
		"success" : 200,
		"no_content" : 204,
		"bad_request" : 400,
		"unauthorized_access" : 401,
		"forbidden" : 403,		
		"conflict" : 409,
		"internal_server_error" : 500		
	}
} 