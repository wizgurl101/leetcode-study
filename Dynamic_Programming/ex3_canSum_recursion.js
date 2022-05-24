/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 1:10:00
   code solution time: 1:17:00
 */
//  brute force solution
const canSum_slow_solution = (targetSum, numbers) => {
  // base case
  if (targetSum === 0) return true;

  // base case
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainer = targetSum - num;
    if (canSum(remainer, numbers)) return true;
  }

  return false;
};

// using memorization
// time: 1:22:00
// time complexity: 1:29:00
const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainer = targetSum - num;
    if (canSum(remainer, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(300, [7, 14]));
