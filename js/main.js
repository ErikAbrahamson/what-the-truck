
var search = 'https://api.foursquare.com/v2/venues/search?';
var ID = '&client_id=L315SVFDTIGOFB4XCGNPEKM2S5CHEO24T4YPEMBTLP2UP3ZP&client_secret=GX2APOUMZCXT4DHUS4BZZKVNDTMMBSZFKMQM4LK1II3JOJOE';
// https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=YYYYMMDD
// search?request
// intent?browse
// radius? (in meters)

$(document).ready(function() {
  //set intent to browse
  var browse = 'browse';
  var radius = 800 || userInput;
  var near = 'll=40.7,-74';
  var currentDate = function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = '&v=' + yyyy + mm + dd;
    return today;
  };

  //AJAX Request
  $.ajax({
    url: search + near + ID + currentDate(),
    type: 'GET',
    success: function(data) {
      console.log(data);
    }
  });
});


