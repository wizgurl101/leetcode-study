/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 3:58:02
   code solution time: 4:00:53
   time complexity: 4:06:20
 */

// tabulation solution
const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);

  // base case
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
};

console.log(howSum(7, [2, 3])); // [3,2,2]
console.log(howSum(300, [7, 14])); // null
