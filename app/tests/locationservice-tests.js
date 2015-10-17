"use strict";

describe("locationservice ", function () {
  var locationservice;

  beforeEach(module("myApp.view1"));

  beforeEach(inject(function (_locationservice_) {
    locationservice = _locationservice_;
  }));

  it("finds a location", function () {
    console.log(locationservice);
    locationservice.getLocation().then(function(location) {

    });
  });
});
