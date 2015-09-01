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
    trucks = JSON.parse(data);
    trucks = trucks.response.groups[0].items;
    router.get('/', function(request, response) {
      response.json(trucks.filter(function(truck) {
        return truck.venue.categories[0].id === '4bf58dd8d48988d1cb941735';
      }));
    });
  },
  error: function(error) {
    console.log(error);
  }
};

ajax(options);

module.exports = router;
