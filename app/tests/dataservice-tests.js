"use strict";

describe("dataservice ", function () {
    var dataservice, httpBackend;

    beforeEach(module("myApp.view1"));

    beforeEach(inject(function (_dataservice_, $httpBackend) {
        dataservice = _dataservice_;
        httpBackend = $httpBackend;
    }));

    it("a correct response", function () {
        httpBackend.whenGET(tConfiguration.url).respond({
            data: {
                venues: [
                    {
                        name: "Lääkäri",
                        location: {
                            lat: 12.3345,
                            lng: 65.1235
                        }
                    },
                    {
                        name: "Keskusta",
                        location: {
                            lat: 15.8456,
                            lng: 75.0021
                        }
                    }
                ]
            }
        });

        dataservice.getVenues(tCoords.dummyLat, tCoords.dummyLng).then(function(response) {
            expect(response.data.venues.length).toEqual(2);
            expect(response.data.venues[0].name).toEqual("Lääkäri");
            expect(response.data.venues[1].location.lat).toEqual(15.8456);
            expect(response.data.venues[1].location.lng).toEqual(75.0021);
        });
        httpBackend.flush();
    });

    it("gets a proper response for a single venue GET", function () {
        httpBackend.whenGET(tConfiguration.single_venue_url).respond({
            data: {
                venue: {
                    name: "Lääkäri",
                    location: {
                        lat: 12.3345,
                        lng: 65.1235
                    }
                }
            }
        });

        dataservice.getVenue(tIds.venueId).then(function(response) {
            expect(response.data.venue).toBeDefined();
            expect(response.data.venue.name).toEqual("Lääkäri");
            expect(response.data.venue.location.lat).toEqual(12.3345);
            expect(response.data.venue.location.lng).toEqual(65.1235);
        });
        httpBackend.flush();
    });

});
