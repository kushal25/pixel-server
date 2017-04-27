/*
@author: Kushal Malani
Created on: 04/26/2017
Modified by: Kushal Malani
Modified on: 04/26/2017
*/

'use strict';
/*Custom Json Response*/
module.exports = {

	jsonResponse:function(msg){
		var json = {response : msg};
		return json;
	},

	jsonArrayResponse:function(arrayData){
		var resp = {};
		resp['arrayResponse'] = arrayData;
		var json = {response : resp};
		return json;
	}



}