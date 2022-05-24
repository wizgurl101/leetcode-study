/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 6:00
 */

// if n get larger --> time and space complexity grows
const fib = (n) => {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
};

// optimized solution, using dynamic programing
// using memoization --> store sub problem solution
//  use js object (hashmap) --> key will be argu to the functions and value will be the return value
/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 32:00 --> explanation of the optimized solution with DP

   time: O(n)
   space: O(n)
   
 */
const fib_solution = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
};
