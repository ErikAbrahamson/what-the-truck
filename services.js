var myApp = angular.module('myApp', [])

  .service('TruckService', function($http, $q) {
    var deferred = $q.defer();

    $http.get({
      url: 'https://api.foursquare.com/v2/venues/explore',
      type: 'JSON',
      data: {
        ll: '39.7,-104.9',
        query: 'Food Truck',
        venuePhotos: 1,
        sortByDistance: 1,
        client_id: 'L315SVFDTIGOFB4XCGNPEKM2S5CHEO24T4YPEMBTLP2UP3ZP',
        client_secret: 'GX2APOUMZCXT4DHUS4BZZKVNDTMMBSZFKMQM4LK1II3JOJOE',
        v: '20150911'
      }
    }).then(function(data) {
      deferred.resolve(data);
      console.log(data);
      $scope.trucks = data;
    });

    this.getTrucks = function() {
      return deferred.promise;
    };
  })

  .controller('TruckController', function($scope, TruckService) {
    var promise = TruckService.getTrucks();
    promise.then(function(data) {
      $scope.trucks = data;
      console.log($scope.trucks);
    });
  });
