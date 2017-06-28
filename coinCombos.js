// Find the total number of coin combinations for a given amount
const makeChange = (amount, index) => {
  let coins = [25, 10, 5, 1];
  let counts = 0;
  let secondLast = coins[coins.length-2];

  // Recurse through index levels
    // index = 0-quarters; 1-dimes; 2-nickels; 3-pennies
    // add one to counts if
      // '2nd least amount' is reached
      // or amount < 5cents
  let calcChange = (amount, index) => {
    let coinAmt = coins[index];
    let len = (amount/coinAmt);

    if ((index >= coins.length-1) || (amount < secondLast)) {
      return ++counts;
    }
    // let coinAmt = coins[index];
    // let len = (amount/coinAmt);

    for (let i=0; i<= len; i++) {
      let remainingAmt = amount - i * cointAmt;
      calcChange(remainingAmt, index+1);
    }
  }

  calcChange(amount,index);
  return counts;
}

console.log(calcChange(25, 0));