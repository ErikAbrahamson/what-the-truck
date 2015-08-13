$(document).ready(function() {
  setTimeout(function() {
    $('#sort-rating').on('click', function(event) {
      event.preventDefault();

      function sortHigh() {
        var sorted = [];
        for (var i = 0; i < currentList.length; i++) {
          if (currentList[i].venue.rating > 8 && currentList[i].venue.rating !== undefined) {
            currentList.sort(function(a, b) {
              return b.venue.rating - a.venue.rating;
            });
            sorted.push(currentList[i]);
            }
          }
        return sorted;
        }


    });
    console.log(currentList);
  }, 1000);
});
