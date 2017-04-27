/*
@author: Kushal Malani
Created on: 04/26/2017
Modified by: Kushal Malani
Modified on: 04/26/2017
*/


/*Handler used to remove elemets from a JSON Object */
"use strict";

module.exports = {

	delete : function(jsonObj, removeJsonElement)
	{
		delete jsonObj[removeJsonElement];
		return jsonObj;
	},

	add : function(jsonObj, addJsonElement, elementValue)
	{
		
		jsonObj[addJsonElement] = elementValue;
		return jsonObj;
	}
}