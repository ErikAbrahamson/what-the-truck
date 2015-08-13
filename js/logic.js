var get = {
  currentDate: function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }
    today = yyyy + mm + dd;
    return today;
  },
  initVenues: function(venues) {
    currentVenues = venues;
    console.log('Venues received!');
  },
  highRating: function(venues) {
    var sorted = [];
    var venuesCopy = venues.slice();
      for (var i = 0; i < venuesCopy.length; i++) {
        if (venuesCopy[i].venue.rating !== undefined || null) {
          console.log(venuesCopy[i].venue.rating);
            venuesCopy.sort(function(a, b) {
          return b.venue.rating - a.venue.rating;
          });
        } else {
          // console.log('no rating');
        }
      }
      return sorted;
    },
  lowRating: function(venues) {
    var sorted = [];
      for (var i = 0; i < venues.length; i++) {
        if (venues[i].venue.rating < 5 || venues[i].venue.rating === undefined) {
          venues.sort(function(a, b) {
            return a.venue.rating - b.venue.rating;
          });
        sorted.push(venues[i]);
      }
    }
    return sorted;
  }
};
