# https://leetcode.com/problems/merge-two-sorted-lists/
# Neetcode: https://www.youtube.com/watch?v=XIdigk956u0

# Definition for singly-linked list.
from subprocess import list2cmdline


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # need a dummy node for the edge case of inserting into a dummy list
        dummyNode = ListNode()
        tail = dummyNode

        while list1 and list2:
            if list1.val < list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next

        # case what if one of the list is empty and the other is not
        if list1:
            tail.next = list1
        elif list2:
            tail.next = list2

        return dummyNode.next