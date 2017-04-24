
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
**/

var translateRomanNumeral = function(roman) {

  var dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  var len = roman.length;
  var total = 0;

  for (let i=0; i<len; i++) {
    if (i+1<len && dict[roman[i]] < dict[roman[i+1]]) {
      total -= dict[roman[i]];
    } else {
      total += dict[roman[i]];
    }
  }
  return total;
};
