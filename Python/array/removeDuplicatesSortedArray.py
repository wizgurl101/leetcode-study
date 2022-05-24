# https://leetcode.com/problems/remove-duplicates-from-sorted-array/
# Neetcode: https://www.youtube.com/watch?v=DEJAZBq0FDA

# two pointers

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        leftPointer = 1

        for r in range(1, len(nums)):
            if(nums[r] != nums[r -1]):
                nums[leftPointer] = nums[r]
                leftPointer += 1

        return leftPointer