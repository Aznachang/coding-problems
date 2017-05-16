const reverseString = (str) => {
  let copy = str.split('');
  let len = copy.length,
      mid = Math.floor(len / 2),
      temp;

  if (typeof str !== 'string') {return null;}
  if (str.length < 2) { return str; }

  for (let i = 0; i < mid; i++) {
    temp = copy[len -1 -i];
    copy[len -1 -i] = copy[i];
    copy[i] = temp;
  }

  return copy.join('');
}

const reverseWords = (str) => {
  let copy = str.trim().replace(/\s+/g, ' ').split(' '),

}

reverseWords('   I li    ke  java    script     ');