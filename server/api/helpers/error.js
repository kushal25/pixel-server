/*
@author: Kushal Malani
Created on: 04/26/2017
Modified by: Kushal Malani
Modified on: 04/26/2017
*/

'use strict';
/*Custom Error Messages*/
module.exports = {

	handleError: function (res, statusCode, err) {
	  statusCode = statusCode || 500;
	  res.status(statusCode).json(makeJson(err));
	}

}

    function makeJson(msg){
		var json = {response : msg};
		return json;
	}