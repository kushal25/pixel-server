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
  function puts(error, stdout, stderr) 
  { 
    if(stdout)
    {
      console.log(stdout);
      res.status(200).json(stdout); 
    }
    else
    {
      console.log("Something is wrong!!");
      res.status(400).json("Error");
    }
  }
  var setData = req.body.setData;
  //queries.write(setData);
  var exec = require('child_process').exec;
  exec("ls", puts);

}