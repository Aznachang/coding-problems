// returns nth Fibonacci Number
const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
};

const memoize = (func) => {
  let storage = {};
  let sliceArgs = Array.prototype.slice;

  return function() {
    let args = sliceArgs.call(arguments);

    if (storage[args]) {
      return storage[args];
    } else
      return (storage[args] = func.apply(this, args));
  }
}

// let result = memoize(fibonacci);
// result5 = result(5);
// console.log(result5); // 5