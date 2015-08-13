$(document).ready(function() {
  setTimeout(function() {
    $.ajax({
      url: 'https://api.foursquare.com/v2/venues/search',
      type: 'GET',
      data: {
        client_id: 'L315SVFDTIGOFB4XCGNPEKM2S5CHEO24T4YPEMBTLP2UP3ZP',
        client_secret: 'GX2APOUMZCXT4DHUS4BZZKVNDTMMBSZFKMQM4LK1II3JOJOE',
        v: get.currentDate(),
        ll: '39.733848,-104.992459', // can make dynamic
        query: 'Food Truck' // can make dynamic
      },
      dataType: 'json',
      success: function(data) {
        console.log(data);
        venues = data.response.venues[0].items;
        get.initVenues(venues);
      }
    });
  }, 500);
});

// https://api.foursquare.com/v2/venues/search?client_id=L315SVFDTIGOFB4XCGNPEKM2S5CHEO24T4YPEMBTLP2UP3ZP&client_secret=GX2APOUMZCXT4DHUS4BZZKVNDTMMBSZFKMQM4LK1II3JOJOE&v=20150813&ll=39.733848%2C2C104.992459&query=Food+Truck
