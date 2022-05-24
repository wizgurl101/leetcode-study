# https://leetcode.com/problems/number-of-islands/
# Neetcode: https://www.youtube.com/watch?v=pV2kpPD66nE

import collections

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0

        rows, cols = len(grid), len(grid[0])

        visited = set()

        numOfIsland = 0

        def bfs(r, c):
            queue = collections.deque()
            visited.add((r, c))
            queue.append((r, c))

            while queue:
                # if interview ask for depth instead, use pop
                row, col = queue.popleft()
                directions = [[1, 0], [-1, 0], [0,1], [0, -1]]

                for dr, dc in directions:
                    r, c = row + dr, col + dc

                    if(r in range(rows) and
                        c in range(cols) and
                        grid[r][c] == '1' and
                        (r, c) not in visited):
                            queue.append((r, c))
                            visited.add((r, c))

        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == "1" and (row, col) not in visited:
                    bfs(row, col)
                    numOfIsland += 1

        return numOfIsland
