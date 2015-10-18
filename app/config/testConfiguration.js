tIds = {
    client_id: "id",
    client_secret: "secret",
    venueId: "testId"
};

tCoords = {
    dummyLat: 12.85337,
    dummyLng: 34.3321
};

tConfiguration = {
    url:    "https://api.foursquare.com/v2/venues/search" +
            "?client_id=" + tIds.client_id +
            "&client_secret=" + tIds.client_secret +
            "&v=20130815" +
            "&ll=" +
            tCoords.dummyLat +
            "," +
            tCoords.dummyLng,

    single_venue_url: "https://api.foursquare.com/v2/venues/" + tIds.venueId +
                        "?client_id=" + tIds.client_id +
                        "&client_secret=" + tIds.client_secret +
                        "&v=20130815"
    };

