/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 1:52:10
   code solution time: 1:57:20
   time complexity: 2:11:15
 */

//  brute solution
// time complexity: 2:05:00
// m = target sum
// n = numbers.length

// time: O(n^m * m)
// space: O(m^2)
const bestSum_1 = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);

    if (remainderCombination) {
      const combination = [...remainderCombination, num];

      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
};

//  dp solution
// time: O(m^2*n)
// space: O(m^2)
const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);

    if (remainderCombination) {
      const combination = [...remainderCombination, num];

      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [1, 4, 5])); // [4,4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25,25,25,25]
