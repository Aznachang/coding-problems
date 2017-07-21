const allAnagrams = (str, ana='', result=[]) => {
  let len = str.length;

  // base case
  if (str.length===0) {
    // push to result
    result.push(ana);
    return;
  }
  // iterate through given 'string'
  for (let i=0; i<str.length; i++) {
    allAnagrams(str.slice(0,i)+str.slice(i+1), ana+str[i], result);
  }
  return result;
};

let anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]