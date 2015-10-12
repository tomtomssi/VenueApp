angular
    .module('myApp.view1')
    .controller('SearchController', SearchController);

function SearchController($scope, $http){
  var url = "https://api.foursquare.com/v2/venues/search" +
      "?client_id=" + gConfiguration.client_id +
      "&client_secret=" + gConfiguration.client_secret +
      "&v=20130815" +
      "&ll=40.7,-74";

    $http.get(url).success(function(data){
        $scope.items = data;
    });
}
