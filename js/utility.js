var get = {
  Truck: function(trucks) {
    this.name = trucks.venue.name ? trucks.venue.name : 'n/a';
    this.rating = trucks.venue.rating ? trucks.venue.rating : 'This truck has not been rated yet';
    this.price = trucks.venue.price ? trucks.venue.price.message : 'n/a';
    this.location = trucks.venue.location ? trucks.venue.location.address : 'n/a';
    this.distance = +(trucks.venue.location.distance * 0.000621371).toFixed(1) ? +(trucks.venue.location.distance * 0.000621371).toFixed(1) : 'n/a';
    this.hours = trucks.venue.hours ? trucks.venue.hours.status : 'Hours not available';
    this.open = trucks.venue.hours ? trucks.venue.hours.isOpen : 'n/a';
    this.website = trucks.venue.url ? trucks.venue.url : 'No website posted';
    this.menu = trucks.venue.url ? trucks.venue.url : 'No menu posted';
    this.twitter = trucks.venue.contact.twitter ? trucks.venue.contact.twitter : 'No Twitter account listed';
    this.formattedPhone = trucks.venue.contact.formattedPhone ? trucks.venue.contact.formattedPhone : 'No phone number listed';
    this.phone = trucks.venue.contact.phone ? trucks.venue.contact.phone : 'No phone number listed';
  },
  newTrucks: function(trucks) {
    currentTrucks = trucks;
    currentTrucks = currentTrucks.map(function(truck) {
    return new get.Truck(truck);
    });
    get.render();
  },
  render: function() {
    $(document).ready(function() {
      var truck = $('<div>').addClass('truck bg-info col-xs-2-offset-6');
      var logo = $('<div>').addClass('logo col-xs-2');
      var logoImg = $('<img>').addClass('img-circle').attr('src','img/default-logo.png');
      logo = logo.append(logoImg);
      for (var i = 0; i < currentTrucks.length; i++) {
        truck.append(logo);
        // truck.append('<h4>' + currentTrucks[i].name + '</h4');
        $('#venue-list').append(truck).hide().fadeIn(400);
      }
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
  lowRating: function(trucks) {
    var sorted = [];
    var trucksCopy = trucks.slice();
    for (var i in trucksCopy) {
      if (typeof trucksCopy[i].rating === 'number') {
        trucksCopy[i].i = i;
        sorted.push(trucksCopy[i]);
      }
      sorted.sort(function(a, b) {
        return (a.rating - b.rating);
      });
    }
    return sorted;
  },
  highRating: function(trucks) {
    var sorted = [];
    var trucksCopy = trucks.slice();
    for (var i in trucksCopy) {
      if (typeof trucksCopy[i].rating === 'number') {
        trucksCopy[i].i = i;
        sorted.push(trucksCopy[i]);
      }
      sorted.sort(function(a, b) {
        return (b.rating - a.rating);
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
