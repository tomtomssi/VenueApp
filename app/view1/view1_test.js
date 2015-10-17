'use strict';

describe('myApp.view1 module', function () {
    var $httpBackend, $rootScope, createController, authRequestHandler;

    // Set up the module
    beforeEach(module('myApp.view1'));

    beforeEach(inject(function ($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        // backend definition common for all tests
        authRequestHandler = $httpBackend.when('GET', 'jee')
            .respond({userId: 'userX'}, {'A-Token': 'xxx'});

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        createController = function () {
            return $controller('SearchController', {'$scope': $rootScope});
        };
    }));


    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('be defined', inject(function() {
        expect(createController).toBeDefined();
    }));

    it('to succesfully send a GET', inject(function() {
        authRequestHandler = $httpBackend.when('GET', tConfiguration.url)
            .respond(
            {
                id: "jee"
            }
        );
        var controller = createController();
        $httpBackend.flush();
    }));
});