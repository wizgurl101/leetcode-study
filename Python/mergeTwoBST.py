# https://leetcode.com/problems/merge-two-binary-trees/

# Neetcode: https://www.youtube.com/watch?v=QHH6rIK3dDQ

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        # base case: tree 1 & 2 are both null
        if not root1 and root2:
            return None

        # merge both trees and create a new tree
        root1Value = root1.val if root1 else 0
        root2Value = root2.val if root2 else 0
        newRoot = TreeNode(root1Value + root2Value)

        # merge the left and right sub tree
        # check if the node at the left and right of the subtrees are not null
        newRoot.left = self.mergeTrees(root1.left if root1 else None, root2.left if root2 else None)

        newRoot.right = self.mergeTrees(root1.right if root1 else None, root2.right if root2 else None)

        return newRoot