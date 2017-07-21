const flatten = (arr, once=false, result=[]) => {
  let len = arr.length;

  if (once) {
    return [].concat(...arr);
  }

  // base case
  if (!Array.isArray(arr)) {
    result.push(arr);
    return;
  }
  for (let i=0; i<arr.length; i++) {
    flatten(arr[i], once, result);
  }
  return result;
}