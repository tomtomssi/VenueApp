var app = angular
    .module('myApp.view1');
    app.controller('SearchController', SearchController);
    app.controller('LocationDetailController', LocationDetailController);

SearchController.$inject = ['mapservice', 'locationservice', 'dataservice', '$scope'];
LocationDetailController.$inject = ['$scope', '$routeParams'];

function LocationDetailController($scope, $routeParams){

    activate();

    function activate(){
        console.log("ASDADASDADSSD");
        $scope.locationId = $routeParams.locationId;
    }
}

function SearchController(mapservice, locationservice, dataservice, $scope){

    activate();

    function activate(){
        locationservice.getLocation()
            .then(function(location){
                console.log("Locationservice fetched current location");
                getVenues(location)
                    .then(function(){
                        console.log("Serviced succesfully");
                    })
            });

        function getVenues(location){
            var latitude = location.coords.latitude;
            var longitude = location.coords.longitude;

            return dataservice.getVenues(latitude, longitude)
                .then(function(data){
                    console.log("Dataservice fetched venues");
                    $scope.items = data.response;
                    mapservice.drawMarkers(data.response.venues, latitude, longitude)
                });
        }
    }
    $scope.orderProperty = 'name';
}

