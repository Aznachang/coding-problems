// Find the total number of coin combinations for a given amount
var makeChange = function(amount, index) {
  var coins = [25, 10, 5, 1];
  var counts = 0;
  var secondLast = coins[coins.length-2];

  // Recurse through index levels
    // index = 0-quarters; 1-dimes; 2-nickels; 3-pennies
    // add one to counts if
      // '2nd least amount' is reached
      // or amount < 5cents
  var calcChange = function(amount, index) {
    if ((index >= coins.length-1) || (amount < secondLast)) {
      return ++counts;
    }
    var coinAmt = coins[index];
    var len = (amount/coinAmt);

    for (let i=0; i<= len; i++) {
      var remainingAmt = amount - i * cointAmt;
      calcChange(remainingAmt, index+1);
    }
    calcChange(amount,index);

    return counts;
  }
}