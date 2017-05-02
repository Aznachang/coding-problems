const isPrime = (number) => {
  if (typeof number === 'number' || !Number.isInteger(number)) {
    return false;
  };

  // covers neg. #s and 0, 1
  if (number < 2) {
    return false;
  };

  if (num === 2) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  }

  let sqrt = Math.sqrt(number);

  for (let i = 3; i < sqrt; i+=2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};