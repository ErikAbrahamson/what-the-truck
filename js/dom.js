var truck = $('<div>').addClass('truck bg-info col-xs-2-offset-6');
var logo = $('<div>').addClass('logo col-xs-2')
  .append('<img src="img/default-logo.png">');
var nameDesc = $('<div>').addClass('name-desc col-xs-7');
var info = $('<div>').addClass('info col-xs-3');

$('#sort-rating').on('click', function() {
  $('#venue-list').append(truck);
  truck.append(logo);
  truck.append(nameDesc);
  console.log(nameDesc);
  truck.append(info);
  $('h4').text('hello');
  $('strong').text('strong');
});


// console.log(get.currentTrucks);
// $(document).ready(function() {
//   for (var i = 0; i < get.currentTrucks.length; i++) {
//     var truck = $('<div>').addClass('truck bg-info col-xs-2-offset-6');
//     var nameDesc = $('<div>').addClass('name-desc col-xs-7');
//     truck.append(nameDesc.html(
//       '<h4><strong>' + currentTrucks[i].name + '</strong></h4>' +
//       // '<p>' + currentTrucks[i].description + '</p>'
//       '<span class="left">' + currentTrucks[i].location + '</span>' +
//       '<span class="right">' + currentTrucks[i].hours + '</span>'
//     ));
//     $('#venue-list').append(truck[i]);
//   }
// });


  // .append('<div>').addClass('logo col-xs-2');
