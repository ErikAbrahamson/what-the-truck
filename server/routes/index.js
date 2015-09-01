var express = require('express');
var http = require('http');
var router = express.Router();
var util = require('../utility/utility');
var ajax = require('najax');
var keys = require('../utility/keys');

var fsTrucks = {
  url: 'https://api.foursquare.com/v2/venues/explore',
  type: 'GET',
  data: {
    ll: '39.7,-104.9',
    query: 'Food Truck',
    venuePhotos: 1,
    sortByDistance: 1,
    client_id: keys.c1,
    client_secret: keys.c2,
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

ajax(fsTrucks);

module.exports = router;
