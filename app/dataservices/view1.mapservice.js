angular
    .module('myApp.view1')
    .factory('mapservice', mapservice);

mapservice.$inject = ['$rootScope'];

function mapservice($rootScope) {
    return {
        drawMarkers: drawMarkers
    };

    function drawMarkers(venues, latitude, longitude) {
        $rootScope.map = {
            center: {
                latitude: latitude,
                longitude: longitude
            }, zoom: 16
        };
        $rootScope.options = {
            scrollwheel: true,
            title: 'testTitle'
        };
        $rootScope.randomMarkers = [];
        for( var i = 0; i < venues.length; i++){
            $rootScope.randomMarkers.push(createMarker(venues[i], i));
        }
        console.log("Markers drawn successfully!");
    }

    function createMarker(venue, i){
        return {
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
    }
}