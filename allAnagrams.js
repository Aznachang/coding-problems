let allAnagrams = (string) => {
  let result = [];
  let len = string.length;

  if (typeof string !== 'string') {
      return null;
  }

  // base case - ana (currCombo)
  let anagram = (ana,str) => {
      // base case
      if (str === '') {
          result.push(ana);
          return;
      }
      // loop through string
      for (let i=0, i<len; i++) {
          anagram(ana+str[i], str.slice(0,i) + str.slice(i+1));
      }
  }
  // invoke
  anagram(string,'');
  return result;
};
