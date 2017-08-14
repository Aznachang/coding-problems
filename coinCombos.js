// Find the total number of coin combinations for a given amount
const calcChange = (amount, index=0, counts=0) => {
  const coins = [25, 10, 5, 2];

  // base case ---------------
  //add one to counts if index=3 (penny level) is reached
  if (index === coins.length -1 && amount % coins[index]===0) {
    return ++counts;
  }
  let coinAmt = coins[index];
  let maxNumCoins = (amount/coinAmt);

  for (let i=0; i<= maxNumCoins; i++) {
    let remainingAmt = amount - i * coinAmt;
    //console.log('coin: '+ coins[index] + ' x ' + i + ' remainingAmt: '+ remainingAmt);
    counts = calcChange(remainingAmt, index+1, counts);
    // without counts =... won't work as its value will be reset to zero when retrun to caller
  }
  return counts;
}
console.log(calcChange(2));
console.log(calcChange(5));
console.log(calcChange(12));
console.log(calcChange(15));
console.log(calcChange(125));