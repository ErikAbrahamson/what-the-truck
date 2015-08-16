var get = {
  Truck: function(trucks) {
    this.name = trucks.venue.name ? trucks.venue.name : 'n/a';
    this.rating = trucks.venue.rating ? trucks.venue.rating : 'N/A';
    this.price = trucks.venue.price ? trucks.venue.price.message : 'n/a';
    this.location = trucks.venue.location ? trucks.venue.location.address : 'n/a';
    this.distance = +(trucks.venue.location.distance * 0.000621371).toFixed(1) ? +(trucks.venue.location.distance * 0.000621371).toFixed(1) : 'n/a';
    this.hours = trucks.venue.hours ? trucks.venue.hours.status : 'Hours not available';
    this.open = trucks.venue.hours ? trucks.venue.hours.isOpen : 'n/a';
    this.website = trucks.venue.url ? trucks.venue.url : 'No website posted';
    this.menu = trucks.venue.url ? trucks.venue.url : 'No menu posted';
    this.twitter = trucks.venue.contact.twitter ? trucks.venue.contact.twitter : 'N/A';
    this.formattedPhone = trucks.venue.contact.formattedPhone ? trucks.venue.contact.formattedPhone : 'No phone number listed';
    this.phone = trucks.venue.contact.phone ? trucks.venue.contact.phone : 'N/A';
    this.photos = trucks.venue.photos.groups[0] ? trucks.venue.photos.groups[0].items : 'N/A';
    this.comment = trucks.tips ? trucks.tips[0].text : 'N/A';
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
      var truck = $('<div>').addClass('truck col-xs-2-offset-6');

      var logo = $('<div>').addClass('logo col-xs-2');
      var logoImg = $('<img>').addClass('image img-circle').attr('src','img/default-logo.png');
      logo = logo.append(logoImg);

      var nameDesc = $('<div>').addClass('name-desc col-xs-7');
      var name = $('<h4>').attr('id', 'title');
      var desc = $('<p>').addClass('description');
      var spanLeft = $('<span>').addClass('left');
      var spanRight = $('<span>').addClass('right');
      nameDesc = nameDesc.append(name).append(desc).append(spanLeft).append(spanRight);

      var info = $('<div>').addClass('info col-xs-3');
      var distance = $('<p>').addClass('distance');
      var rating = $('<p>').append('<strong class="rating">');
      var price = $('<p>').addClass('price');
      var twitter = $('<p>').addClass('twitter');
      var phone = $('<p>').addClass('phone');
      info = info.append(distance).append(rating).append(price).append(twitter).append(phone);

      truck = truck.append(logo).append(nameDesc).append(info);

      for (var i = 0; i < currentTrucks.length; i++) {
        if (currentTrucks[i].open !== 'N/A' && currentTrucks[i].open === true) {
          truck.removeClass('bg-info').addClass('bg-success');
        } else {
          truck.removeClass('bg-success').addClass('bg-info');
        }
        truck.find('.image').attr('src', currentTrucks[i].photos[0].prefix + '125x125' + currentTrucks[i].photos[0].suffix);
        $('img')
          .on('load', function() {
            $(this).css('visibility', 'visible');
          })
          .on('error', function() {
            $(this).attr('src', 'img/default-logo.png');
          });
        truck.find('h4').text(currentTrucks[i].name);
        truck.find('.description').html(function() {
          if (currentTrucks[i].comment !== 'N/A') {
            return '<em>"' + currentTrucks[i].comment + '"</em>';
          } else {
            return '<em>No description yet</em>';
          }});
        truck.find('.distance').html('<p><strong>' + currentTrucks[i].distance + '</strong> miles away</p>');
        truck.find('.left').text(currentTrucks[i].location);
        truck.find('.right').text(currentTrucks[i].hours);
        truck.find('.price').text(function() {
          if (currentTrucks[i].price === 'Cheap') {
            return '$ ' + currentTrucks[i].price;
          } else if (currentTrucks[i].price === 'Moderate') {
            return '$$ ' + currentTrucks[i].price;
          } else if (currentTrucks[i].price !== 'Cheap' || 'Moderate') {
            return '$$$ ' + currentTrucks[i].price;
          }});
          truck.find('.twitter').html(function() {
            if (currentTrucks[i].twitter !== 'N/A') {
              return '<img src="img/twitter-bird.svg"><a href="https://twitter.com/' + currentTrucks[i].twitter + '"> @' + currentTrucks[i].twitter + '</a>';
            } else {
              return '';
          }});
          truck.find('.phone').html(function() {
            if (currentTrucks[i].phone !== 'N/A') {
              return '\u260E ' + '<a href="tel:+' + currentTrucks[i].phone + '">' +  currentTrucks[i].formattedPhone + '</a>';
            } else {
              return '';
            }});
            truck.find('.rating').text(get.renderRating());


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
  renderRating: function() {
    var stars = [
      ['\u2605','\u2606','\u2606','\u2606','\u2606'],
      ['\u2605','\u2605','\u2606','\u2606','\u2606'],
      ['\u2605','\u2605','\u2605','\u2606','\u2606'],
      ['\u2605','\u2605','\u2605','\u2605','\u2606'],
      ['\u2605','\u2605','\u2605','\u2605','\u2605']
    ];
    for (var i = 0; i < currentTrucks.length; i++) {
      if (currentTrucks[i].rating !== 'N/A') {
        if (currentTrucks[i].rating <= 3) {
          return stars[0].join('');
        } else if (currentTrucks[i].rating <= 5) {
          return stars[1].join('');
        } else if (currentTrucks[i].rating <= 7) {
          return stars[2].join('');
        } else if(currentTrucks[i].rating <= 9) {
          return stars[3].join('');
        } else {
          return stars[4].join('');
        }
      }
    }
  }
};
