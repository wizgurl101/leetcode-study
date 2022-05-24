# https://leetcode.com/problems/combination-sum/
# Neetcode: https://www.youtube.com/watch?v=GBKI9VSKdGg&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&index=20

# backtracking

class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []

        def dfs(pointer, currentList, currentListSum):
            if currentListSum == target:
                result.append(currentList.copy())
                return 

            # what if the combination was impossible to find
            # case 1: pointer being out of bound --> cannot chose any more candiates
            # or current sum of the combination list is greater than the target
            if pointer >= len(candidates) or currentListSum > target:
                return
            
            currentList.append(candidates[pointer])
            dfs(pointer, currentList, currentListSum + candidates[pointer])
            currentList.pop()
            # going down the other path in the decision tree
            dfs(pointer + 1, currentList, currentListSum)

        dfs(0, [], 0)
        return result