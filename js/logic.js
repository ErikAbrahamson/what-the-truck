var x = {
  sortHigh: function() {
    var sorted = [];
      for (var i = 0; i < currentList.length; i++) {
        if (currentList[i].venue.rating > 5 && currentList[i].venue.rating !== undefined) {
          currentList.sort(function(a, b) {
            return b.venue.rating - a.venue.rating;
          });
          sorted.push(currentList[i]);
        }
      }
      return sorted;
    },
  sortLow: function() {
    var sorted = [];
      for (var i = 0; i < currentList.length; i++) {
        if (currentList[i].venue.rating < 5 || currentList[i].venue.rating === undefined) {
          currentList.sort(function(a, b) {
            return a.venue.rating - b.venue.rating;
          });
        sorted.push(currentList[i]);
      }
    }
    return sorted;
  }
};

var currentList = [];
