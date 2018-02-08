// find the first non-repeated number in the array
const firstNonRepeat = (arr, store={}) => {
  let len = arr.length, 
    min, 
    minIndex;
  
  for (let i=0; i<len; i++) {
    let num = arr[i];
    // number not found yet
    if (!store[num]) {
      store[num] = [1,i];
      // number repeat
    } else {
      ++store[num][0];
    }
  }

  for (num in store) {
    let count = store[num][0],
      ind = store[num][1];
    
    if (count === 1) {
      if (!minIndex) {
        min = num;
        minIndex = ind;
      } else if (ind < minIndex) {
        min = num;
        minIndex = ind;
      }
    }
  } // end of 2nd for-loop
  
  return min;
}