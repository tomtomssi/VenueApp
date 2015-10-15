angular
    .module('myApp.view1')
    .factory('mapservice', mapservice);

mapservice.$inject = ['$rootScope'];

function mapservice($rootScope) {
    return {
        drawMarkers: drawMarkers,
        drawMarker: drawMarker
    };

    function drawMarker(latitude, longitude) {
        $rootScope.map = {
            center: {
                latitude: latitude, longitude: longitude
            }, zoom: 16
        };
        $rootScope.options = {
            scrollwheel: true
        };
        $rootScope.marker = {
            id: 0,
            coords: {
                latitude: latitude,
                longitude: longitude
            },
            options: {draggable: false}
        };
        console.log("Markers drawn successfully!");
    }

    function drawMarkers(venues, latitude, longitude) {
        $rootScope.map = {
            center: {
                latitude: latitude,
                longitude: longitude
            }, zoom: 16
        };
        $rootScope.options = {
            scrollwheel: true
        };
        $rootScope.randomMarkers = [];
        for( var i = 0; i < venues.length; i++){
            $rootScope.randomMarkers.push(createMarker(venues[i], i));
        }
        console.log("Markers drawn successfully!");
    }

    function createMarker(venue, i){
        var ret = {
            latitude: venue.location.lat,
            longitude: venue.location.lng,
            title: venue.name,
            options: {
                labelContent: venue.name,
                labelAnchor: '55 0',
                labelClass: 'marker-labels'
            },
            id:  i
        };
        return ret;
    }
}