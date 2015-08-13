var currentVenues = [];
var x = {
  initVenues: function(venues) {
    console.log(venues);
  },
  ratingHigh: function(venues) {
    var venuesCopy = venues.slice();
    var sorted = [];
      for (var i = 0; i < venuesCopy.length; i++) {
        if (venuesCopy[i].venue.rating > 5 && venuesCopy[i].venue.rating !== undefined) {
          venuesCopy.sort(function(a, b) {
            return b.venue.rating - a.venue.rating;
          });
          sorted.push(venuesCopy[i]);
        }
      }
      return sorted;
    },
  ratingLow: function(venues) {
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
