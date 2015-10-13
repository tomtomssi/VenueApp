angular
    .module('myApp.view1')
    .controller('SearchController', SearchController);

SearchController.$inject = ['dataservice', '$scope'];

function SearchController(dataservice, $scope){

    activate();

    function activate(){

        getVenues().then(function(){
            console.log("Venues successfully fetched")
        });

        function getVenues(){
            return dataservice.getVenues()
                .then(function(data){
                    $scope.items = data.response;
                });
        }
    }
}