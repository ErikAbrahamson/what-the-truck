angular.module('TruckFilters', [])
  .filter('truckName', function($scope) {
    return function($scope) {
      return $scope.trucks.venue ? $scope.trucks.venue.name : 'N/A';
    };
  });
