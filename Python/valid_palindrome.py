# https://leetcode.com/problems/valid-palindrome/
# Neetcode: https://www.youtube.com/watch?v=jJXJ16kPFWg&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&index=54

class Solution:
    def isPalindrome(self, s: str) -> bool:
        newStr = ""

        for c in s:
            if c.isalnum()