/**
    https://www.youtube.com/watch?v=tWVWeAqZ0WU
    timestamp: 1:39:37

    https://www.structy.net/problems/island-count

    Write a function, islandCount, that takes in a grid containing Ws and Ls. 
    W represents water and L represents land. 
    The function should return the number of islands on the grid. An island is a vertically or horizontally connected 
    region of land.

*/
const islandCount = (grid) => {
  let visited = new Set();
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // depth first
      if (explore(grid, row, col, visited)) {
        count++;
      }
    }
  }

  return count;
};

const explore = (grid, row, col, visited) => {
  const rowsInbound = 0 <= row && row < grid.length;
  const colInbound = 0 <= col && col < grid[0].length;

  if (!rowsInbound || !colInbound) return false;

  if (grid[row][col] === 'w') return false;

  const position = row + ',' + col;

  if (visited.has(position)) return false;

  visited.add(position);

  // exploring up
  explore(grid, row - 1, col, visited);
  // exploring down
  explore(grid, row + 1, col, visited);
  // exploring left
  explore(grid, row, col - 1, visited);
  // exploring right
  explore(grid, row, col + 1, visited);

  return true;
};
