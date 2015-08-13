$(document).ready(function() {
  setTimeout(function() {
    $.ajax({
      url: 'https://api.foursquare.com/v2/venues/explore',
      type: 'GET',
      data: {
        ll: '39.7,-104.9', // can make dynamic
        query: 'Food Truck', // can make dynamic. lol
        openNow: 1,
        sortByDistance: 1,
        client_id: 'L315SVFDTIGOFB4XCGNPEKM2S5CHEO24T4YPEMBTLP2UP3ZP',
        client_secret: 'GX2APOUMZCXT4DHUS4BZZKVNDTMMBSZFKMQM4LK1II3JOJOE',
        v: get.currentDate()
      },
      dataType: 'json',
      success: function(data) {
        venues = data.response.groups[0].items;
        get.initVenues(venues);
      },
      error: function() {
        console.log('There was a problem with the request');
      }
    });
  }, 300);
  // DOM stuff here
});
