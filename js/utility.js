var get = {
  Truck: function(venues) {
    this.name = venues.venue.name;
    this.rating = venues.venue.rating || undefined;
    this.price = venues.venue.price.message;
    this.location = venues.venue.location.address;
    this.distance = +(venues.venue.location.distance * 0.000621371)
      .toFixed(1);
    this.hours = venues.venue.hours.status;
    this.open = venues.venue.hours.isOpen || false;
    this.website = venues.venue.url || undefined;
    this.menu = venues.venue.url || undefined;
    this.twitter = venues.venue.contact.twitter || undefined;
    this.formattedPhone = venues.venue.contact.formattedPhone || undefined;
    this.phone = venues.venue.contact.phone;
  },
    newTrucks: function(venues) {
    currentVenues = venues;
    currentTrucks = currentVenues.map(function(truck) {
      return new get.Truck(truck);
    });
  },
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
  },
  // renderRating: function() {
  //   switch(true) {
  //     1-2 && 2-3:
  //       return 1 star;
  //     3-4 && 4-5:
  //       return 2 stars;
  //     5-6 && 6-7:
  //       return 3 stars;
  //     7-8 && 8-9:
  //       return 4 stars;
  //     9-10:
  //       return 5 stars;
  //   }
  // }
};
