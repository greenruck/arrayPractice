const arr = [2, 4, 7, 16, 25, 90 , 91, 21];

function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  };

