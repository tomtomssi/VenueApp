angular
    .module('myApp.view1')
    .factory('locationservice', locationservice);

locationservice.$inject = ['$q', '$rootScope', '$window'];

function locationservice($q, $rootScope, $window) {
    return {
        getLocation: function () {
            var deferred = $q.defer();

            $window.navigator.geolocation.getCurrentPosition(function (position) {
                $rootScope.$apply(function () {
                    deferred.resolve(position);
                });
            });

            return deferred.promise;
            }
        };
}