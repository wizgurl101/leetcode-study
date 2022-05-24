/**
   https://www.youtube.com/watch?v=oBt53YbR9Kk&t=301s
   time: 4:07:25
 */

// tabulation solution
const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        const currentCombination = table[i + num];

        if (!currentCombination || currentCombination.length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }

  return table[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [1, 4, 5])); // [4,4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25,25,25,25]
