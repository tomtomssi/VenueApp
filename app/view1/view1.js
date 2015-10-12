'use strict';

var app = angular.module('myApp.view1', [])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'SearchController'
        });
    }]);

app.controller('SearchController', function ($scope, $http) {
    var url = "https://api.foursquare.com/v2/venues/search" +
    "?client_id=" +
    "&client_secret=" +
    "&v=20130815" +
    "&ll=40.7,-74";

    $http.get(url).success(function(data){
       $scope.items = data;
    });
});