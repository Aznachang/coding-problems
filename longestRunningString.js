// Find the longest run of identical characters (from a string)
// and return an array containg start and end indices of that run
// If there are two runs of identical length, return first one.

// 'abbbcc' -> [1,3]
// 'catttlinnn' --> [2,4]
// 'xyz' --> [0,0]
// '' --> [0,0]

const longestRun = str => {
  if (typeof str !== 'string') {
    return null;
  }

  let result = [0,0],
      startInd = 0,
      len = str.length,
      topCount = 1,
      count = 1; // consec.

  for (let i=0; i<len; i++) {
    let left = str[i],
        right = str[i+1];

    if (left === right) {
      count++;
      // left !== right
    } else {
      if (count > topCount) {
        result[0] = startInd;
        result[1] = i;
        topCount = count;
        count = 1; // revert to 1
      }
      startInd = i+1;
    } // end of else
  } // end of for-loop

  return result;
};