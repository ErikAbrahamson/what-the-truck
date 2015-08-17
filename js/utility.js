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
    this.menu = trucks.venue.url ? trucks.venue.url : 'n/a';
    this.twitter = trucks.venue.contact.twitter ? trucks.venue.contact.twitter : 'N/A';
    this.formattedPhone = trucks.venue.contact.formattedPhone ? trucks.venue.contact.formattedPhone : 'No phone number listed';
    this.phone = trucks.venue.contact.phone ? trucks.venue.contact.phone : 'N/A';
    this.photos = trucks.venue.photos.groups[0] ? trucks.venue.photos.groups[0].items : 'N/A';
    this.comment = trucks.tips ? trucks.tips[0].text : 'N/A';
    this.ll = trucks.venue.location ? (trucks.venue.location.lat + ',' + trucks.venue.location.lng) : undefined;
    this.priceTier = trucks.venue.price ? trucks.venue.price.tier : 'n/a';
  },
  newTrucks: function(trucks) {
    currentTrucks = [];
    trucks.map(function(truck) {
      currentTrucks.push(new get.Truck(truck));
    });
    get.clearTrucks();
    get.initTrucks();
    return currentTrucks;
  },
  render: function(trucks) {
    $(document).ready(function() {
    for (var i = 0; i < trucks.length; i++) {
      var truck = $('<div>')
        .addClass('truck col-xs-2-offset-6');
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
      if (trucks[i].open !== 'N/A' && trucks[i].open === true) {
        truck.removeClass('bg-info').addClass('bg-success');
      } else {
        truck.removeClass('bg-success').addClass('bg-info');
      }
      truck.find('.image').attr('src', trucks[i].photos[0].prefix + '125x125' + trucks[i].photos[0].suffix);
      $('img')
        .on('load', function() {
          $(this).css('visibility', 'visible');
        })
        .on('error', function() {
          $(this).attr('src', 'img/default-logo.png');
        });
        truck.find('h4').html(function() {
          if (trucks[i].menu !== 'n/a' || undefined) {
            return '<a href="' + trucks[i].menu + '" target="_blank"> '+ trucks[i].name + ' <img src="img/menu.png" width="1" height="auto"></a>';
          } else {
            return trucks[i].name;
          }});
        truck.find('.description').html(function() {
          if (trucks[i].comment !== 'N/A') {
            return '<em>"' + trucks[i].comment + '"</em>';
          } else {
            return '<em>No description yet</em>';
          }});
        truck.find('.distance').html('<p><strong>' + trucks[i].distance + '</strong> miles away</p>');
        truck.find('.left').html(function() {
          if (trucks[i].location !== undefined) {
            return '<a href="' + 'https://www.google.com/maps/place/' + trucks[i].ll + '" target="_blank">' + '<img src="img/gps.png" width="12" height="auto"> ' + trucks[i].location + '</a>';
            } else {
              return '';
            }});
        truck.find('.right').text(trucks[i].hours);
        truck.find('.price').text(function() {
          if (trucks[i].price === 'Cheap') {
            return '$ ' + trucks[i].price;
          } else if (trucks[i].price === 'Moderate') {
            return '$$ ' + trucks[i].price;
          } else if (trucks[i].price !== 'Cheap' || 'Moderate') {
            return '$$$ ' + trucks[i].price;
          }});
          truck.find('.twitter').html(function() {
            if (trucks[i].twitter !== 'N/A') {
              return '<img src="img/twitter-bird.svg"><a href="https://twitter.com/' + trucks[i].twitter + '"> @' + trucks[i].twitter + '</a>';
            } else {
              return '';
          }});
          truck.find('.phone').html(function() {
            if (trucks[i].phone !== 'N/A') {
              return '\u260E ' + '<a href="tel:+' + trucks[i].phone + '">' +  trucks[i].formattedPhone + '</a>';
            } else {
              return '';
            }});
          truck.find('.rating').text(get.renderRating(trucks[i].rating) + ' ' + trucks[i].rating);
          if (typeof trucks[i].rating === 'number') {
            truck.find('.rating').css('color', 'black');
          } else {
            truck.find('.rating').css('color', '#D8D8D8');
          }
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
  highRating: function(trucks) {
    var notRated = [];
    var rated = [];
    for (var i in trucks) {
      if (typeof trucks[i].rating !== 'number') {
        notRated.push(trucks[i]);
      } else {
        trucks[i].i = i;
        rated.push(trucks[i]);
      }
      rated.sort(function(a, b) {
        return (b.rating - a.rating);
      });
    }
    var sorted = rated.concat(notRated);
    get.clearTrucks();
    get.render(sorted);
  },
  lowRating: function(trucks) {
    var notRated = [];
    var rated = [];
    for (var i in trucks) {
      if (typeof trucks[i].rating !== 'number') {
        notRated.push(trucks[i]);
      } else {
        trucks[i].i = i;
        rated.push(trucks[i]);
      }
      rated.sort(function(a, b) {
        return (a.rating - b.rating);
      });
    }
    var sorted = rated.concat(notRated);
    get.clearTrucks();
    get.render(sorted);
  },
  closest: function(trucks) {
    var notRated = [];
    var rated = [];
    for (var i in trucks) {
      if (typeof trucks[i].distance !== 'number') {
        notRated.push(trucks[i]);
      } else {
        trucks[i].i = i;
        rated.push(trucks[i]);
      }
      rated.sort(function(a, b) {
        return (a.distance - b.distance);
      });
    }
    var sorted = rated.concat(notRated);
    get.clearTrucks();
    get.render(sorted);
  },
  farthest: function(trucks) {
    var notRated = [];
    var rated = [];
    for (var i in trucks) {
      if (typeof trucks[i].distance !== 'number') {
        notRated.push(trucks[i]);
      } else {
        trucks[i].i = i;
        rated.push(trucks[i]);
      }
      rated.sort(function(a, b) {
        return (b.distance - a.distance);
      });
    }
    var sorted = rated.concat(notRated);
    get.clearTrucks();
    get.render(sorted);
  },
  expensive: function(trucks) {
    var sorted = [];
    for (var i in trucks) {
      sorted.push(trucks[i]);
      trucks[i].i = i;
    }
    sorted.sort(function(a, b) {
      return (b.priceTier - a.priceTier);
    });
    get.clearTrucks();
    get.render(sorted);
  },
  cheapest: function(trucks) {
    var sorted = [];
    for (var i in trucks) {
      sorted.push(trucks[i]);
      trucks[i].i = i;
    }
    sorted.sort(function(a, b) {
      return (a.priceTier - b.priceTier);
    });
    get.clearTrucks();
    get.render(sorted);
  },
  renderRating: function(rating) {
    var stars = [
      ['\u2605','\u2606','\u2606','\u2606','\u2606'],
      ['\u2605','\u2605','\u2606','\u2606','\u2606'],
      ['\u2605','\u2605','\u2605','\u2606','\u2606'],
      ['\u2605','\u2605','\u2605','\u2605','\u2606'],
      ['\u2605','\u2605','\u2605','\u2605','\u2605']
    ];
    var noRating = ['\u2606','\u2606','\u2606','\u2606','\u2606'].join('');
      if (rating <= 3) {
        return stars[0].join('');
      } else if (rating <= 6) {
        return stars[1].join('');
      } else if (rating <= 7.5) {
        return stars[2].join('');
      } else if (rating <= 8) {
        return stars[3].join('');
      } else if (rating <= 9) {
        return stars[4].join('');
      } else {
        return noRating;
      }
  },
  initTrucks: function() {
    $(document).ready(function() {
      get.render(currentTrucks);
    });
  },
  clearTrucks: function() {
    for (var i = $('.truck').length; i > 0; i--) {
      $('.truck').remove();
    }
  }
};
