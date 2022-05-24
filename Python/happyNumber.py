# https://leetcode.com/problems/happy-number/
# Neetcode: https://www.youtube.com/watch?v=ljz85bxOYJ0

class Solution:
    def isHappy(self, n: int) -> bool:
        visitHashSet = set()

        while n not in visitHashSet:
            visitHashSet.add(n)

            n = self.sumOfSquares(n)

            if n == 1:
                return True
        
        return False

    
    def sumOfSquares(self, n: int) -> int:
        output = 0

        while n:
            digit = n % 10
            digit = digit ** 2 #square the digit in python
            output += digit

            n = n // 10 # in python // means integer division

        return output