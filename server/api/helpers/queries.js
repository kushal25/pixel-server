/*
@author: Kushal Malani
Created on: 02/20/2016
Modified by: Kushal Malani
Modified on: 02/20/2016
*/

'use strict';
/*Handler with Common Operations to avoid redundant Code */
import Q from 'q';
var im = require('imagemagick');
module.exports = {
	extractData:function(command){
		var deferred = Q.defer();
		var exec = require('child_process').exec;
   		exec(command, function(err,documents){
   			if(err)
   			{
   				deferred.reject();
   			}
   			else
   			{
   				deferred.resolve(documents);
   			}
   		});
   		return deferred.promise;
	},

  processImage : function(file){
	  var deferred = Q.defer();
    im.convert([file,"-bordercolor","white","-border","1","-alpha","set",
      "-channel","RGBA","-fuzz","28%",
      "-fill", "white", "-opaque","white","-colorspace","Gray","-sharpen","10%", file]
    ,function (err, documents) {
      if(err)
      {
        deferred.reject();
      }
      else {
        deferred.resolve("success");
      }
    });
    return deferred.promise;
  },

 find : function(DB, query, fields, options) {
      var deferred = Q.defer();
      DB.find(query, fields, options, function(err, documents) {
          if (err) {
              deferred.reject();
          } else {
              deferred.resolve(documents);
          }
      });
      return deferred.promise;
  },

	save:function(object) {
        var deferred = Q.defer();
        object.save(function(err, documents) {
            if (err) {
                deferred.reject();
            } else {
                deferred.resolve(documents);
            }
        });
        return deferred.promise;
    }


};
