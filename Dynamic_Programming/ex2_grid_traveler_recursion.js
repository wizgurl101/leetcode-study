/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 38:45
   code solution time: 49:05
 */
//  this is too slow for calculating a large grid
// time: O(2^n+m) --> exponential
// space: O(n+m)
const gridTraveler = (m, n) => {
  // base case 1: if grid is 1x1
  if (m === 1 && n === 1) return 1;

  // base case 2: invalid grid
  if (m === 0 || n === 0) return 0;

  // m - 1 since we moving down the grid (one less row)
  // n - 1 since we moving to the right (one less column)
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// time: 51:00 why the brute force solution (above) is so slow
// applying DP now
const gridTraveler_solution = (m, n, memo = {}) => {
  // are the args in the memo
  const key = m + ',' + n;
  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

  return memo[key];
};
