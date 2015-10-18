"use strict";

describe("locationservice ", function () {

    var locationservice, position;

    beforeEach(module("myApp.view1"));

    beforeEach(inject(function (_locationservice_) {
        locationservice = _locationservice_;
    }));

    beforeEach(function() {
        locationservice = {
            getLocation: function() {
                return {
                    coords: {
                        latitude: 32.8569, longitude: -96.9628
                    }
                };
            }
        };

        spyOn(locationservice, "getLocation").and.callFake(function() {
            return {
                coords: {
                    latitude: 14.3123, longitude: -11.2332
                }
            };
        });
        position = locationservice.getLocation();
    });

    it("tracks that the spy was called", function() {
        expect(locationservice.getLocation).toHaveBeenCalled();
    });

    it("when called returns the requested value", function() {
        expect(position).toEqual({
            coords: {
                latitude: 14.3123, longitude: -11.2332
            }
        });
    });
});