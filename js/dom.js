$(document).ready(function() {
  setTimeout(function() {
    $.ajax({
      url: 'https://api.foursquare.com/v2/venues/explore',
      type: 'GET',
      data: {
        ll: '39.733848,-104.992459', // can make dynamic
        query: 'Food Truck', // can make dynamic. lol
        client_id: 'L315SVFDTIGOFB4XCGNPEKM2S5CHEO24T4YPEMBTLP2UP3ZP',
        client_secret: 'GX2APOUMZCXT4DHUS4BZZKVNDTMMBSZFKMQM4LK1II3JOJOE',
        v: get.currentDate()
      },
      dataType: 'json',
      success: function(data) {
        console.log(data);
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
