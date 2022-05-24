# https://leetcode.com/problems/counting-bits/
# neetcode: https://www.youtube.com/watch?v=RyBM56RIWrM

class Solution:
    def countBits(self, n: int) -> List[int]:
        dp = [0] * (n+1)
        # highest power of 2
        offset = 1

        for i in range(1, n+1):
            if offset * 2 == i:
                offset = i

            dp[i] = 1 + dp[i - offset]

        return dp
