var integerToRomanNumeral = function(num) {
  var number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var numeral = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

  var roman = '';
  var i=0;

  if (num <= 0) { return ''};

  while (num > 0) {
      if (num >= number[i]) {
          num -= number[i];
          roman += numeral[i];
      } else {
          i++;
      }
  }

  return roman;
}
