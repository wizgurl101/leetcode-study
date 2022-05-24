# https://leetcode.com/problems/maximum-subarray/
# Neetcode: https://www.youtube.com/watch?v=5WZl3MMT0Eg

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = float('-inf')
        current_sum = 0

        for num in nums:
            current_sum += num

            if num > current_sum and current_sum < 0:
                current_sum = num

            if current_sum > max_sum:
                max_sum = current_sum

        return max_sum