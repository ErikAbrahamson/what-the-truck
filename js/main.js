$(document).ready(function() {
   navigator.geolocation.getCurrentPosition(get.currentPosition);
  $('#venue-list').on('mouseenter', 'div.truck img', function() {
    $(this).addClass('transition').css('z-index', '6');
  });
  $('#venue-list').on('mouseleave', 'div.truck img', function() {
    $(this).removeClass('transition').css('z-index', '5');
  });
  $('#sort-rating').click(function(event) {
    event.preventDefault();
    if (+$('.truck').eq(0).find('.rating').text()[6] > 3) {
      get.lowRating(currentTrucks);
    } else {
      get.highRating(currentTrucks);
    }
  });
  $('#sort-distance').click(function(event) {
    event.preventDefault();
    if (+($('.truck').eq(0).find('.distance').text()[0] > 2)) {
      get.closest(currentTrucks);
    } else {
      get.farthest(currentTrucks);
    }
  });
  $('#sort-price').click(function(event) {
    event.preventDefault();
    if ($('.truck').eq(0).find('.price').text() !== '$ Cheap') {
      get.cheapest(currentTrucks);
    } else {
      get.expensive(currentTrucks);
    }
  });
  $('#sort-open').click(function(event) {
    get.isOpen(currentTrucks);
  });
  $('#search-radius').click(function(event) {
    var input = +$('#search-bar').val();
    get.radius();
  });
});
