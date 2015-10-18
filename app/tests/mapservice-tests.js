"use strict";

describe("mapservice ", function () {
    var mapservice, $rootScope, venues;

    beforeEach(module("myApp.view1"));

    beforeEach(inject(function (_mapservice_, _$rootScope_) {
        mapservice = _mapservice_;
        $rootScope = _$rootScope_;

        venues = [
            {
                name: "venue1",
                location: {
                    latitude: tCoords.dummyLat,
                    longitude: tCoords.dummyLng
                }
            },
            {
                name: "venue2",
                location: {
                    latitude: tCoords.dummyLat,
                    longitude: tCoords.dummyLng
                }
            }
        ];

        mapservice.drawMarkers(venues, tCoords.dummyLat, tCoords.dummyLng);
    }));

    it("is defined", function () {
        expect(mapservice).toBeDefined();
    });

    it("map to be centered at dummy location", function () {
        expect($rootScope.map.center.latitude).toEqual(tCoords.dummyLat);
        expect($rootScope.map.center.longitude).toEqual(tCoords.dummyLng);
    });

    it("to have two markers", function () {
        expect($rootScope.randomMarkers.length).toEqual(2);
    });

    it("markers to have proper data", function () {
        var marker1 = $rootScope.randomMarkers[0];
        var marker2 = $rootScope.randomMarkers[1];

        expect(marker1.title).toEqual("venue1");
        expect(marker1.longitude).toEqual(tCoords.longitude);
        expect(marker1.latitude).toEqual(tCoords.latitude);
        expect(marker1.options.labelContent).toEqual("venue1");
        expect(marker1.id).toEqual(0);

        expect(marker2.title).toEqual("venue2");
        expect(marker2.longitude).toEqual(tCoords.longitude);
        expect(marker2.latitude).toEqual(tCoords.latitude);
        expect(marker2.options.labelContent).toEqual("venue2");
        expect(marker2.id).toEqual(1);
    });
});
