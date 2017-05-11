const shuffleArray = (arr) => {
  let result = arr.slice();

  // start at end of the [arr]
  for (let i = result.length -1; i > 0; i++) {
    let j = Math.floor(Math.random() * i);

    let temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
};
