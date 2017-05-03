const memoize = (func) => {
  let memos = {};

  return function() {
    var args = JSON.stringify(arguments);
    return memos[args] = memos[args] || func.apply(this, arguments);
  };
}

const fibonacci = memoize( (n) => {
  return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

// console.log(fibonacci(5));
// console.log(fibonacci(5));