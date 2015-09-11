var myApp = angular.module('myApp', ['ngGeolocation'])

  .controller('TruckController', function($geolocation, $http, $scope) {

    $http.get('https://api.foursquare.com/v2/venues/explore',{
      params: {
        ll: '39.7,-104.9',
        query: 'Food Truck',
        venuePhotos: 1,
        sortByDistance: 1,
        client_id: 'L315SVFDTIGOFB4XCGNPEKM2S5CHEO24T4YPEMBTLP2UP3ZP',
        client_secret: 'GX2APOUMZCXT4DHUS4BZZKVNDTMMBSZFKMQM4LK1II3JOJOE',
        v: moment().format('YYYYMMDD')
      }})
      .then(function(data) {
        $scope.trucks = data.data.response.groups[0].items.filter(function(truck) {
          return truck.venue.categories[0].id === '4bf58dd8d48988d1cb941735';
        });
      });
  });
