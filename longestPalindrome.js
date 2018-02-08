const longestPalindrome = str => {
  let len = str.length;
  
  if (len === 0) { return ''; }
  if (len === 1) { return str; }
  if (len === 2) { 
    return str[0] === str[1] ? str : str[0];
  } 

  let result = str[0];

  let centerPal = (left, right) => {
    // expand left and right once each time
    while (left >=0 && right < len && str[left] === str[right]) {
        left--;
        right++;
    }
    // Go back to previous palindrome sequence
    // 2nd parameter is NON-INCLUSIVE
    return str.slice(left+1, right);
  }

  for (let i=0; i<len; i++) {
    // Odd Case - ABA - B
    let oddPal = centerPal(i,i);
    // Even Case - ABBA - process two middles BB
    let evenPal = centerPal(i,i+1);

    if (oddPal.length > result.length && oddPal.length > 1) {
      result = oddPal;
    }

    if (evenPal.length > result.length && evenPal.length > 1) {
      result = evenPal;
    }
  }
  return `The longest palindrome is ${result} with a length of ${result.length}`;
};
