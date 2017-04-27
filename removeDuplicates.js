var removeDuplicates = (num) => {
  if (Array.isArray(num)) {
    let result = [];
    let storage = {};

    for (let i=0; i<num.length; i++) {
        if (!storage[num[i]]) {
            result.push(num[i]);
            storage[num[i]] = num[i];
        }
    }

    return result;
  } else if (typeof num === 'string') {
    let str = '';
    let storage = {};

    for (let i=0; i<num.length; i++) {
        if (!storage[num[i]]) {
            result.push(num[i]);
            storage[num[i]] = num[i];
        }
    }
    return str;
  }
  return null;
}
