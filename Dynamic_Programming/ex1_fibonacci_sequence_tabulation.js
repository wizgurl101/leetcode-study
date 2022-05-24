/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 3:11:11
 */

// tabulation
// time: O(n)
// space: O(n)
const fib = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
};

console.log(fib(6));
console.log(fib(50));
