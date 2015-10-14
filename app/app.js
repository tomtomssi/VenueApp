'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'uiGmapgoogle-maps'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/locations', {
        templateUrl: 'partials/location-details.html',
        controller: 'LocationDetailController'
      }).
      when('/locations/:locationId', {
        templateUrl: 'partials/location-details.html',
        controller: 'LocationDetailController'
      }).
      otherwise({redirectTo: '/view1'});
}]);
