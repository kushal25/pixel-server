/*
@author: Kushal Malani
Created on: 05/06/2017
Modified by: Kushal Malani
Modified on: 05/06/2017
*/

'use strict';
/*Extraction Text Helper*/
module.exports = {

	extractPhoneNumber: function(text)
	{
		text.replace("—","-");
		console.log(text.match(/(^[a-zA-Z0-9._-])?(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\(?\d{3}\)?([\-. ])?\d{3}([\-. ])?\d{4}/gi));
        return text.match(/(^[a-zA-Z0-9._-])?(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\(?\d{3}\)?([\-. ])?\d{3}([\-. ])?\d{4}/gi);
	},

	extractEmails: function(text)
	{
		console.log(text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi));
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    },
    
    extractURL: function(text) 
    {
    	console.log(text.match(/(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}/gi));
        return text.match(/(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}/gi);
    },

    extractDateAndTime: function(text) 
    {
    	console.log(text.match(/^(([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0,1])([/+-]))?([1-9]|0[1-9]|1[0-2])([/+-])((19|20)[0-9]{2}|[0-9]{2})$|^(([1-9]|0[1-9]|1[0-2])([/+-]))?([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0,1])([/+-])((19|20)[0-9]{2}|[0-9]{2})|^(\d\d\d\d)|(\d\d)[/-](0?[1-9]|1[0-2])([/-])?(?:(0?[1-9]|[12][0-9]|3[01]))\s?(?:([AaPp]([\s.])?[Mm]([\s.])?))|(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s+\d{1,2},\s+\d{4}/gi));
        return text.match(/^(([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0,1])([/+-]))?([1-9]|0[1-9]|1[0-2])([/+-])((19|20)[0-9]{2}|[0-9]{2})$|^(([1-9]|0[1-9]|1[0-2])([/+-]))?([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0,1])([/+-])((19|20)[0-9]{2}|[0-9]{2})|^(\d\d\d\d)|(\d\d)[/-](0?[1-9]|1[0-2])([/-])?(?:(0?[1-9]|[12][0-9]|3[01]))\s?(?:([AaPp]([\s.])?[Mm]([\s.])?))|(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s+\d{1,2},\s+\d{4}/gi);
    },
          
    extractTime: function(text) //Added Time extraction;
    {
    	console.log(text.match(/((1[0-2]|0?[1-9]):([0-5][0-9])( )?([AaPp][Mm]))/gi));
        return text.match(/((1[0-2]|0?[1-9]):([0-5][0-9])( )?([AaPp][Mm]))/gi);      
    }


}