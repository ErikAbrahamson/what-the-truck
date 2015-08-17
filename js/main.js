$(document).ready(function() {
  $.ajax({
    url: 'https://api.foursquare.com/v2/venues/explore',
    type: 'GET',
    data: {
      ll: '39.7,-104.9',
      query: 'Food Truck',
      venuePhotos: 1,
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
        get.newTrucks(venues);
      }
    },
    error: function(error) {
      console.log('There was a problem with the request:' + error);
    }
  });
  $('#venue-list').on('mouseenter', 'div.truck img', function() {
    $(this)
      .addClass('transition')
      .css('z-index', '6');
    });
  $('#venue-list').on('mouseleave', 'div.truck img', function() {
    $(this)
      .removeClass('transition')
      .css('z-index', '5');
  });
  $('#sort-rating').click(function(event) {
    event.preventDefault();
    if ($('.truck').eq(0).find('.rating').text() === '★★★★★') {
      get.lowRating(currentTrucks);
    } else {
      get.highRating(currentTrucks);
    }
  });
  $('#sort-distance').click(function(event) {
    event.preventDefault();
    if (+($('.truck').eq(0).find('.distance').text()[0] > 5)) {
      get.closest(currentTrucks);
    } else {
      get.farthest(currentTrucks);
    }
  });
  $('#sort-price').click(function(event) {
    event.preventDefault();
    if ($('.truck').eq(0).find('.price').text() !== '$ Cheap') {
      get.cheapest(currentTrucks);
    } else {
      get.expensive(currentTrucks);
    }
  });
});
