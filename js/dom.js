$(document).ready(function() {
  setTimeout(function() {
    $.ajax({
      url: 'https://api.foursquare.com/v2/venues/explore',
      type: 'GET',
      data: {
        ll: '39.7,-104.9', // can make dynamic
        query: 'Food Truck', // can make dynamic. lol
        // openNow: 1,
        sortByDistance: 1,
        client_id: 'L315SVFDTIGOFB4XCGNPEKM2S5CHEO24T4YPEMBTLP2UP3ZP',
        client_secret: 'GX2APOUMZCXT4DHUS4BZZKVNDTMMBSZFKMQM4LK1II3JOJOE',
        v: get.currentDate()
      },
      dataType: 'json',
      success: function(data) {
        unfiltered = data.response.groups[0].items;
        venues = [];
        for (var i = 0; i < unfiltered.length; i++) {
          if (unfiltered[i].venue.categories[0].id === '4bf58dd8d48988d1cb941735') {
            venues.push(unfiltered[i]);
          }
        }
        get.initVenues(venues);
      },
      error: function() {
        console.log('There was a problem with the request');
      }
    });
  }, 300);
  $(window).on('load', function() {
    var truck = $('<div>')
      .append('<span>Test</span')
      .addClass('truck')
      .hide().delay(200).fadeIn(400);
    $('#venue-list').append(truck);
  });
});
