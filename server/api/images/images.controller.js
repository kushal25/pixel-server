/*
@author: Kushal Malani
Created on: 02/23/2016
Modified by: Kushal Malani
Modified on: 02/23/2016
*/

'use strict';

import queries from '../helpers/queries';
import ext from '../helpers/extraction';
var im = require('imagemagick');
var request = require('request');

function processImage(file){
  im.convert(["-units","PixelsPerInch",file,"-density","500", file],
    function(err, stdout){
      if (err) throw err;
      console.log('stdout:', stdout);
    });
  im.convert([file,"-bordercolor","white","-border","1","-alpha","set",
      "-channel","RGBA","-fuzz","28%",
      "-fill", "white", "-opaque","white","-colorspace","Gray","-sharpen","10%", file]
 );

}

export function writeData(req, res)
{
  var writer =
  {
    extractData: function(preprocessingresponse)
    {
      console.log(preprocessingresponse);
      if(preprocessingresponse.toString().toString() === "success")
      {
        return queries.extractData("tesseract " + req.file.path + " stdout");
      }
      else {
        throw "Pre-prcessing failed!";
      }
    },
    respond: function(extractResponse)
    {
        if(extractResponse)
        {

          // function extractPhoneNumber( text) {
          //   text.replace("—","-");
          //   return text.match(/(^[a-zA-Z0-9._-])?(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\(?\d{3}\)?([\-. ])?\d{3}([\-. ])?\d{4}/gi);
          // }

          // function extractEmails ( text ){

          //   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
          // }
          // function extractURL ( text ) {
          //   return text.match(/(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}/gi);
          // }
          // function extractDateAndTime( text ) {
          //   return text.match(/^(([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0,1])([/+-]))?([1-9]|0[1-9]|1[0-2])([/+-])((19|20)[0-9]{2}|[0-9]{2})$|^(([1-9]|0[1-9]|1[0-2])([/+-]))?([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0,1])([/+-])((19|20)[0-9]{2}|[0-9]{2})|^(\d\d\d\d)|(\d\d)[/-](0?[1-9]|1[0-2])([/-])?(?:(0?[1-9]|[12][0-9]|3[01]))\s?(?:([AaPp]([\s.])?[Mm]([\s.])?))|(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s+\d{1,2},\s+\d{4}/gi);
          // }
          // //Added Time extraction;
          // function extractTime(text){
          //   return text.match(/((1[0-2]|0?[1-9]):([0-5][0-9])( )?([AaPp][Mm]))/gi);
          // }
          var abc = extractResponse.replace(/(?:\\[rn]|[\r\n]+)+/g, " ");
          console.log("extracted remove literals :" + abc);
          var number = ext.extractPhoneNumber(extractResponse);
          var email = ext.extractEmails(extractResponse);
          var url = ext.extractURL(extractResponse);
          var dateAndTime = ext.extractDateAndTime(extractResponse);
          var time = ext.extractTime(extractResponse);
          // var number = extractPhoneNumber(extractResponse);
          // var email =  extractEmails(extractResponse);
          // var url = extractURL(extractResponse);
          // var dateAndTime = extractDateAndTime(extractResponse);
          var stime = null;
          var etime = null;
          console.log("Time: "+time);
          if(time)
          {
            if(time.length >=1){
              stime = time[0];
            }
            if(time.length >= 2)
            {
              etime = time[1];
            }
          }
          res.status(200).json(
            {ExtractedData:[{
              "metadata": "Email Address",
              "data":   email
            },{
              "metadata": "Contact",
              "data":   number
            },{
              "metadata": "Web URL",
              "data":   url
            },{
              "metadata": "Date",
              "data":   dateAndTime
            },{
              "metadata":"Start Time",
              "data": stime
            }, {
              "metadata":"End Time",
              "data": etime
            },{
                "metadata":"CompleteText",
                "data": abc
              }


            ]});

        }
        else
        {
            res.status(400).json("Error in Extract Response");
        }
    },
    error: function(err)
    {
        console.log(err);
        res.status(400).json(err);
    }
  }

  var tesseractPromise = queries.extractData("tesseract " + req.file.path + " stdout");
  tesseractPromise.then(writer.respond).fail(writer.error);

   /* var tesseractPromise =   queries.processImage(req.file.path);

    tesseractPromise.then(writer.extractData).then(writer.respond).fail(writer.error);
*/

}
