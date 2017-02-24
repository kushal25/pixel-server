/*
@author: Kushal Malani
Created on: 02/20/2016
Modified by: Kushal Malani
Modified on: 02/20/2016
*/

'use strict';
/*Handler with Common Operations to avoid redundant Code */

var Firebase = require("firebase");
import config from '../../config/environment';
var app = Firebase.initializeApp(config.firebaseConfig);
console.log(app.name);
var database = app.database();

module.exports = {
	write : function(data){
		database.ref("sample").set(data);
	}
}