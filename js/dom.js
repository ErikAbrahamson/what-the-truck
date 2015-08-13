$(document).ready(function() {
  setTimeout(function() {
    $.ajax({
      url: 'https://api.foursquare.com/v2/venues/search',
      type: 'GET',
      data: {
        client_id: 'L315SVFDTIGOFB4XCGNPEKM2S5CHEO24T4YPEMBTLP2UP3ZP',
        client_secret: 'GX2APOUMZCXT4DHUS4BZZKVNDTMMBSZFKMQM4LK1II3JOJO',
        ll: '39.733848%2C-104.992459',
        query: 'Food%20Truck',
        v: get.currentDate()
      },
      dataType: 'json',
      success: function(data) {
        venues = data.response.groups[0].items;
        get.initVenues(venues);
      }
    });
  }, 300);
});
