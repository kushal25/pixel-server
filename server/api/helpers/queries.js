/*
@author: Kushal Malani
Created on: 02/20/2016
Modified by: Kushal Malani
Modified on: 02/20/2016
*/

'use strict';
/*Handler with Common Operations to avoid redundant Code */
import Q from 'q';

module.exports = {
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