# https://leetcode.com/problems/missing-number/
# Neetcode: https://www.youtube.com/watch?v=WnPLSRLSANE

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        res = 0;

        for i in range(len(nums)):
            res += (i - nums[i])
        
        return res