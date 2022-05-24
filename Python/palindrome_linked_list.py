# https://leetcode.com/problems/palindrome-linked-list/
# Neetcode: https://www.youtube.com/watch?v=yOzXms1J6Nk&list=PLot-Xpze53leU0Ec0VkBhnf4npMRFiNcB&index=4

# Two Pointer: Fast & Slow

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        fastPointer = head
        slowPointer = head

        # find the middle of the linked list with the slow pointer
        while fastPointer and fastPointer.next:
            fastPointer = fastPointer.next.next
            slowPointer = slowPointer.next

        # reverse the second half of the linked list
        previousNode = None

        while slowPointer:
            tempPointer = slowPointer.next
            slowPointer.next = previousNode
            previousNode = slowPointer
            slowPointer = tempPointer

        # check if it is a palindrome
        leftPointer = head
        rightPointer = previousNode # previous node should be the last node of the linked list

        # while right pointer have not reach the midpoint
        while rightPointer:
            if leftPointer.val != rightPointer.val:
                return False
            
            leftPointer = leftPointer.next
            rightPointer = rightPointer.next

        return True