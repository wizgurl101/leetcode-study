/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 2:12:00
   code solution time: 2:23:50
 */

// brute force solution
// time complexity: 2:28:51

// time: O(n^m * m)
// space: O(m^2)
const canConstruct_1 = (target, wordBank) => {
  // base case: if target is an empty string
  if (target === '') return true;

  for (let word of wordBank) {
    // checking for the substring
    if (target.indexOf(word) === 0) {
      // 2:26:05 explantion for this logic
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank)) {
        return true;
      }
    }
  }

  return false;
};

// checking for substring trick using indexOf
// example: "potato".indexOf('pot') should be zero
// one way to check if a string is exist as a prefix of another string

// DP solution
// time complexity: 2:37:00

// time: O(n * m^2)
// space: O(m^2)
const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee'])); // false
