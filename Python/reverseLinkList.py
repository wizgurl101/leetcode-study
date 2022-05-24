# Two Pointers Pattern
# https://leetcode.com/problems/reverse-linked-list/
# Neetcode: https://www.youtube.com/watch?v=G0_I-ZF0S38


class Solution1:
    # iteractive solution
    # Time: O(n) - linear 
    # Space: O(1) - constant
    def reverseList(self, head: ListNode) -> ListNode:
        prev, curr = None, head

        while curr:
            next = curr.next
            curr.next = prev 
            prev = curr 
            curr = next

        return prev

    # recursive solution
    # Time: O(n) - linear
    # Space: O(n) - linear
    def reverseListRecursive(self, head: ListNode) -> ListNode:
        
        if not head:
            return None
        
        newHead = head

        if head.next:
            newHead = self.reverseList(head.next)
            head.next.nexr = head 
        
        head.next = None
        return newHead

