angular
    .module('myApp.view1')
    .factory('dataservice', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http){
    return {
        getVenues: getVenues
    };

    function getVenues(){
        var url = "https://api.foursquare.com/v2/venues/search" +
            "?client_id=" + gConfiguration.client_id +
            "&client_secret=" + gConfiguration.client_secret +
            "&v=20130815" +
            "&ll=40.7,-74";

        return $http.get(url)
            .then(getVenuesSuccess)
            .catch(getVenuesFailed);

        function getVenuesSuccess(response){
            console.log("Succesful response with status " + response.status + " " + response.statusText);
            return response.data;
        }

        function getVenuesFailed(){
            console.log("HTTP GET failed");
        }
    }
}
