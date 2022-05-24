/**
 * Check to see if two provided strings are anagrams of each other.
 *
 * Solution from Stephen Grider Udemy Course
 */

function anagrams(stringA, stringB) {
  let aCharMap = buildCharMap(stringA);
  let bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
    return false;

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  const cleanStr = str.replace(/[^\w]/g).toLowerCase();

  for (let char of cleanStr) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function isAnagrams(stringA, stringB) {
  // clean the string inputs
  let cleanStrA = stringA.replace(/[^\w]/g).toLowerCase();
  let cleanStrB = stringB.replace(/[^\w]/g).toLowerCase();

  // sort both strings
  cleanStrA = cleanStrA.split("").sort().join("");
  cleanStrB = cleanStrB.split("").sort().join("");

  return cleanStrA === cleanStrB;
}
