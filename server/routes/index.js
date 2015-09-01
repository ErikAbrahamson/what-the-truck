var express = require('express');
var http = require('http');
var router = express.Router();
var util = require('../logic/utility');
var ajax = require('najax');

var options = {
  url: 'https://api.foursquare.com/v2/venues/explore',
  type: 'GET',
  data: {
    ll: '39.7,-104.9',
    query: 'Food Truck',
    venuePhotos: 1,
    sortByDistance: 1,
    client_id: 'L315SVFDTIGOFB4XCGNPEKM2S5CHEO24T4YPEMBTLP2UP3ZP',
    client_secret: 'GX2APOUMZCXT4DHUS4BZZKVNDTMMBSZFKMQM4LK1II3JOJOE',
    v: util.currentDate()
  },
  success: function(data) {
    x = JSON.parse(data);
    console.log(x);
    router.get('/', function(request, response) {
      response.json(x);
    });
  },
  error: function(error) {
    console.log(error);
  }
};

ajax(options);



// http.request(options, function(response) {
//   response.on('data', function(data) {
//     console.log(data);
//   });
// });

module.exports = router;
