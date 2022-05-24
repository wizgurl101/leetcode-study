# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
#  Neetcode: https://www.youtube.com/watch?v=1pkOgXD63yU&list=PLot-Xpze53lfQmTEztbgdp8ALEoydvnRQ&index=7

# Sliding Window Pattern
# Two Pointers: Left pointer is day we buy, right pointer is the day we sell
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        leftPointer, rightPointer = 0, 1
        maxProfit = 0

        while rightPointer < len(prices):
            # check if the it is profitable
            if prices[leftPointer] < prices[rightPointer]:
                profit = prices[rightPointer] - prices[leftPointer]
                maxProfit = max(maxProfit, profit)
            else:
                # want to shift leftPointer to the right pointer position
                # because that is the lowest seen so far
                leftPointer = rightPointer
            rightPointer += 1

        return maxProfit