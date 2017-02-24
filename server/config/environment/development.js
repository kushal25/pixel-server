'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/pixelserver-dev'
  },

  // Seed database on startup
  seedDB: true,

  firebaseConfig : {
    apiKey: "AIzaSyDzUV948hcMi1m-8ZCywxDeRgLflzWzibs",
    authDomain: "pixie-4cf02.firebaseapp.com",
    databaseURL: "https://pixie-4cf02.firebaseio.com",
    storageBucket: "pixie-4cf02.appspot.com",
    messagingSenderId: "672183312012"
  }



};
