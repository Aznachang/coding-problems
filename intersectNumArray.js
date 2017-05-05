// find intersection of two num. arrays

// naive solution - O(n^2)
const intersectArrays = (a,b) => {
  let len = Math.max(a.length, b.length);
  let max, min;
  let result = [];

  if (a.length > b.length) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }

  for (let i = 0; i < len; i++) {
    if (max.indexOf(min[i]) !== -1) {
      result.push(min[i]);
    }
  }

  return result;
}

// let a = [1,2,3,4,5];
// let b = [2,4,7,11, 15, 1];
// let result = intersectArrays(a,b);
// console.log(result);