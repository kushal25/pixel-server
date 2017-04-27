/*
@author: Kushal Malani
Created on: 04/26/2017
Modified by: Kushal Malani
Modified on: 04/26/2017
*/

'use strict';

import queries from '../helpers/queries';
import _res from '../helpers/httpCodes';
import error from '../helpers/error';
import validator from '../helpers/validator';
import auth from '../helpers/auth';
import logger from '../helpers/logger';
import customResponse from '../helpers/responseMessages';
import status_codes from '../helpers/statusCodes';
import User from './users.model';
import response from '../helpers/response';

export function userSignup(req, res, next) {
    try
    {
        var userName = req.body.userName.trim();
        var userEmail = req.body.userEmail.trim().toLowerCase();
        var userPassword = req.body.userPassword.trim();
        var userPhoneNumber = req.body.userPhoneNumber;
        if (userName && userEmail && userPassword && userPhoneNumber) {

            if(!validator.emailValidation(userEmail))
            {
                error.handleError(res, _res.httpCode.bad_request, customResponse.emailValidationFailed);
            }
            else if(userPassword.length < 8)
            {
                error.handleError(res, _res.httpCode.bad_request, customResponse.incorrectPasswordLength);
            }
            else
            {
                var user = new User({
                    userName: validator.firstLetterUpperCase(userName),
                    userEmail: userEmail,
                    userPassword: userPassword,
                    plainTextPassword: userPassword,
                    userPhoneNumber: userPhoneNumber,
                    userStatus: status_codes.status.user_active,
                    accessCode: "",           
                    description: "",
                    loginStatus: status_codes.status.signed_up,
                    lastLoginAt: "",
                    lastLogoutAt: ""
                });
                var writer = {
                    saveUser: function(findResponse) {
                        if(findResponse.length>0)
                        {
                            throw customResponse.userEmailExists;
                        }
                        else
                        {
                            return queries.save(user);
                        }
                    }, //end of saveUser
                    authToken: function(saveResponse) {              
                        if (saveResponse) {                                     
                            var authToken = auth.signToken(saveResponse, customResponse.user);
                            return queries.prepareResponseObject(saveResponse, "accessCode,plainTextPassword,userPassword,description,lastLoginAt,lastLogoutAt,createdAt,lastModifiedAt,image_ids,userStatus,loginStatus", authToken);               
                        } else {
                            throw customResponse.saveResponseError;
                        }
                    }, //end of respond
                    respond: function(authTokenResponse){
                    	if(authTokenResponse)
                    	{
                    		res.set({
                                'X-Auth-Token': authTokenResponse["X-Auth-Token"]
                            });                         
                            res.status(_res.httpCode.success).json(response.jsonResponse(authTokenResponse));
                    	}
                    	else
                    	{
                    		throw customResponse.prepareResponseObjectError;
                    	}
                    },
                    error: function(err) {
                        if(err)
                        {                     
                        	logger.log(err); 
                            error.handleError(res,_res.httpCode.bad_request,err);
                        }
                        else
                        {
                            error.handleError(res,_res.httpCode.bad_request, customResponse.userSignupError);
                        }
                    } //end of error
                }

                var checkExistsPromise = queries.find(User, {
                    userEmail: userEmail
                }, {}, {
                    limit: 1
                });

                checkExistsPromise.then(writer.saveUser).then(writer.authToken).then(writer.respond).fail(writer.error);
            }

        } else {
            error.handleError(res,_res.httpCode.bad_request, customResponse.userSignupMissing);
        }
    }
    catch(e)
    {
        logger.log(e.stack);
        error.handleError(res, _res.httpCode.internal_server_error, customResponse.internalServerError);
    }
}