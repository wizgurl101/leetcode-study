/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 2:47:30
   code solution time: 2:56:31
   time complexity: 3:09:00
 */

const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  let result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']));
console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaa', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'])); // worst case
