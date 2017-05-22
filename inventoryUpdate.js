let updateInventory = (arr1, arr2) => {
  let storage = {};
  let combo = []; //= arr1.slice();

  // storage: {'Bowling Ball'}

  arr1.forEach(function(item, i) {
    storage[item[1]] = item[0]; // [#, item description]
  });

  arr2.forEach(function(item, i) {
    if (storage[item[1]]) {
      storage[item[1]] += item[0];
    } else {
      storage[item[1]] = item[0];
    }
  });

  for (let key in storage) {
    combo.push([key,storage[key]]);
  }

  // combo = arr2.reduce( (prev, curr) => {
  //   if (storage[curr][1]) {
  //     storage[curr][0] += curr[0];
  //   } else {
  //     storage[curr][0]
  //   }
  // }, []);

  return combo;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
