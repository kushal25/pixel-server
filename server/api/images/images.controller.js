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
  console.log(req.file);
  res.status(200).json("Test Response");

}