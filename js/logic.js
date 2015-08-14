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
  lowRating: function(venues) {
    var sorted = [];
    var venuesCopy = venues.slice();
    for (var i in venuesCopy) {
      if (typeof venuesCopy[i].venue.rating === 'number') {
        venuesCopy[i].i = i;
        sorted.push(venuesCopy[i]);
      }
      sorted.sort(function(a, b) {
        return (a.venue.rating - b.venue.rating);
      });
    }
    return sorted;
  },
  highRating: function(venues) {
    var sorted = [];
    var venuesCopy = venues.slice();
    for (var i in venuesCopy) {
      if (typeof venuesCopy[i].venue.rating === 'number') {
        venuesCopy[i].i = i;
        sorted.push(venuesCopy[i]);
      }
      sorted.sort(function(a, b) {
        return (b.venue.rating - a.venue.rating);
      });
    }
    return sorted;
  }
};
