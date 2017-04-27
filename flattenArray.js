const flatten = (arr, once) => {
  let results = [];

  if (once) {
    // use spread operator
    return [...arr];
  }

  const flatOnce = (arg) => {
    // base case
    if (!Array.isArray(arg)) {
        results.push(arg);
    } else {
        // arg is array
        arg.forEach((item) => {
            flatOnce(item);
        });
    }
  }

  arr.forEach(flatOnce);
  return results;
}