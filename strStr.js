// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Input: haystack = "hello", needle = "ll"
// Output: 2

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = (haystack, needle) => {
  let index = 0;
  let j = 0; // needle index

  if (typeof needle === 'string' && needle.length === 0) return index;
  
  let len = haystack.length;
  if (len === 0 || len < needle.length) return -1;
  
  return haystack.indexOf(needle); 
  // return index;
};