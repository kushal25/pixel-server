/*
@author: Kushal Malani
Created on: 02/23/2016
Modified by: Kushal Malani
Modified on: 02/23/2016
*/

'use strict';

import queries from '../helpers/queries';

export function writeData(req, res)
{
  var writer = 
  {
    respond: function(extractResponse)
    {
        if(extractResponse)
        {
            res.status(200).json(extractResponse);
        }
        else
        {
            res.status(400).json("Error Extract Response");
        }
    },
    error: function(err)
    {
        res.status(400).json(err);
    }
  }

  var tesseractPromise = queries.extractData("tesseract " + req.file.path + " stdout");
  tesseractPromise.then(writer.respond).fail(writer.error);

}