const memoize = (func) => {
  let memos = {};

  return function() {
    var args = JSON.stringify(arguments);
    return memos[args] = memos[args] || func.apply(this, arguments);
  };
}

const fibonacci = (n, store={1: 0, 2:1 }) => {
  if (store[n] || n === 0) {
    return store[n];
  }

  return store[n] = fibonacci(n-1, store) + fibonacci(n-2, store);
};

// console.log(fibonacci(5));
// console.log(fibonacci(5));