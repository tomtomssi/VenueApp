angular
    .module('myApp.view1')
    .factory('mapservice', mapservice);

mapservice.$inject = ['$rootScope'];

function mapservice($rootScope) {
    return {
        drawMarkers: drawMarkers
    };

    function drawMarkers(latitude, longitude) {
        $rootScope.map = {
            center: {
                latitude: latitude, longitude: longitude
            }, zoom: 4
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
}