"use strict";

describe("mapservice ", function () {
  var mapservice, $rootScope;

  beforeEach(module("myApp.view1"));

  beforeEach(inject(function (_mapservice_, _$rootScope_) {
    mapservice = _mapservice_;
    $rootScope = _$rootScope_;

    mapservice.drawMarkers(tCoords.dummyLat, tCoords.dummyLng);
  }));

  it("is defined", function () {
    expect(mapservice).toBeDefined();
  });

  it("marker location to match dummy data", function () {
    expect($rootScope.marker.coords.latitude).toEqual(tCoords.dummyLat);
    expect($rootScope.marker.coords.longitude).toEqual(tCoords.dummyLng);
  });

  it("map to be centered at dummy location", function () {
    expect($rootScope.map.center.latitude).toEqual(tCoords.dummyLat);
    expect($rootScope.map.center.longitude).toEqual(tCoords.dummyLng);
  });
});
