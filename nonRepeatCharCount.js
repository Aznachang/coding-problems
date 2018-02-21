const nonRepeat = str => {
  let len = str.length;
  // EDGE CASES
  if (typeof str !== 'string') {
    return `Not of type: String!`;
  }
  if (len === 0) {
    return 0;
  }

  let maxCount = 0,
    count = 0,
    maxStr = '';
  
  // loop through 'str' to process each char and 
  // create 'maxStr' by adding non-repeated char to it.
  // if the next char is found to be same as ind-th char in 'maxStr', 
  // the front portion of 'maxStr' is chopped off and 
  // starts at its 'ind+1' char-index and 
  // appended with the new repeated char (at the end)

  for (let i = 0; i < len; i++) {
    let curr = str[i];
    // maxStr - CAN CHANGE (see else statement)
    let ind = maxStr.indexOf(curr);

    // if curr. char not found in maxStr - curr NonRepeated subStr
    // append it to maxStr
    if (ind === -1) {
      maxStr += curr;
    } else {
      // chop off the maxStr and START from non-repeated char. index
      // and add the currLetter to the end
      maxStr = maxStr.slice(ind + 1) + curr;
    }
    count = maxStr.length; // reset to length of new maxStr
    if (count > maxCount) maxCount = count;
  } // end of for-loop

  return maxCount;
};

/* let str = 'ABDEFGABEHIJK'; */
/* let str = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAA'; */
let str = 'ABaAC';
let result = nonRepeat(str);
console.log(result);