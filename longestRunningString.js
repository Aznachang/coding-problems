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

  let result = [0,0];
  let curCount = 1;
  let topCount = 1;
  let curStartInd = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i-1]) {
      curCount++;

      if (curCount > topCount) {
        result[0] = curStartInd;
        result[1] = i;  // ending index
        topCount = curCount;
      }
    } else {
      if (curCount > topCount) {
        result[0] = curStartInd;
      }

      curCount = 1;
      curStartInd = i;
    }
  }

  return result;
};