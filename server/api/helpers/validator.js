/*
@author: Kushal Malani
Created on: 04/26/2017
Modified by: Kushal Malani
Modified on: 04/26/2017
*/

'use strict';
/*Handler with Common Server Side Validations */

import validator from 'validator';

module.exports = {  

	emailValidation : function(emailAddress)
	{
		return validator.isEmail(emailAddress);
	},

	firstLetterUpperCase : function(str)
	{
		var pieces = str.split(" ");
    	for ( var i = 0; i < pieces.length; i++ )
    	{
        	var j = pieces[i].charAt(0).toUpperCase();
        	pieces[i] = j + pieces[i].substr(1);
    	}
    	return pieces.join(" ");
	}
}