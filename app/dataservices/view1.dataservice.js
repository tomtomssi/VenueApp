angular
    .module('myApp.view1')
    .factory('dataservice', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http){
    return {
        getVenues: getVenues,
        getVenue: getVenue
    };

    function getVenue(venueId){
        return $http.get(singleVenueUrl(venueId))
            .then(getVenuesSuccess)
            .catch(getVenuesFailed);
    }

    function getVenues(latitude, longitude){
        return $http.get(createUrl(latitude, longitude))
            .then(getVenuesSuccess)
            .catch(getVenuesFailed);
    }

    function getVenuesSuccess(response){
        console.log("Succesful response with status " + response.status + " " + response.statusText);
        return response.data;
    }

    function getVenuesFailed(response){
        console.log(response);
        console.log("HTTP GET failed");
    }

    function singleVenueUrl(venueId){
        return "https://api.foursquare.com/v2/venues/" + venueId +
            "?client_id=" + gConfiguration.client_id +
            "&client_secret=" + gConfiguration.client_secret +
            "&v=20130815";
    }

    function createUrl(latitude, longitude){
        return "https://api.foursquare.com/v2/venues/search" +
            "?client_id=" + gConfiguration.client_id +
            "&client_secret=" + gConfiguration.client_secret +
            "&v=20130815" +
            "&ll=" +
            latitude +
            "," +
            longitude;
    }
}