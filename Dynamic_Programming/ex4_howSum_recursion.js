/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 1:29:43
   code solution time: 1:17:00
   time complexity: 1:44:00
 */

//  brute force solution
// time: O(n^m * m)
// space: O(m)
const howSum_1 = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);

    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }

  return null;
};

// memorization solution
// time complexity: 1:48:45
// time: O(n*m*m) --> O(n*m^2)
// space: O(m^2)
const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);

    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3])); // [3,2,2]
console.log(howSum(300, [7, 14])); // null
