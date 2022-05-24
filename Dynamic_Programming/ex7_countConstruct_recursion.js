/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 2:38:40
   code solution time: 2:42:00
 */

// time complexity: 2:46:30
// time: O(n * m^2)
// space: O(m^2)
const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      // the number of ways it can construct the suffix
      const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
      totalCount += numWaysForRest;
    }
  }

  memo[target] = totalCount;
  return memo[target];
};

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee'])); // 0
