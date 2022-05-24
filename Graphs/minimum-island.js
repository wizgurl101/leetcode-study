/**
    https://www.youtube.com/watch?v=tWVWeAqZ0WU
    timestamp: 2:12:18

    https://www.structy.net/problems/minimum-island

    Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. 
    The function should return the size of the smallest island. An island is a vertically or horizontally connected region 
    of land.

*/
const minimumIsland = (grid) => {
  let visited = new Set();
  let minSize = Infinity;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const size = exploreSize(grid, row, col, visited);

      if (size > 0 && size < minSize) minSize = size;
    }
  }

  return minSize;
};

const exploreSize = (grid, row, col, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;

  if (!rowInbounds || !colInbounds) return 0;

  if (grid[row][col] === 'W') return 0;

  const position = row + ',' + col;

  if (visited.has(position)) return 0;

  visited.add(position);

  let size = 1;

  // exploring up
  size += exploreSize(grid, row - 1, col, visited);
  // exploring down
  size += exploreSize(grid, row + 1, col, visited);
  // exploring left
  size += exploreSize(grid, row, col - 1, visited);
  // exploring right
  size += exploreSize(grid, row, col + 1, visited);

  return size;
};
