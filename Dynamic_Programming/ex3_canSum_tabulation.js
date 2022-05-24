/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 3:38:20
   time complexity: 3:45:25
   code solution time: 3:47:00
 */

//  using tabulation
const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);

  // base case
  table[0] = true;

  for (let i = 0; i <= table.length; i++) {
    if (table[i]) {
      for (let num of numbers) {
        if (i + num < table.length) table[i + num] = true;
      }
    }
  }

  return table[targetSum];
};

const canSum_1 = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);

  // base case
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(300, [7, 14])); // false
