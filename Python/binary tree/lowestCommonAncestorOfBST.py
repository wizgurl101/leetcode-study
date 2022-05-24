# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

# Neetcode: https://www.youtube.com/watch?v=gs2LMfuOR9k
# Back To Back SWE: https://www.youtube.com/watch?v=py3R23aAPCA

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        currentNode = root

        while currentNode:
            if p.val > currentNode.val and q.val > currentNode.val:
                currentNode = currentNode.right
            elif p.val < currentNode.val and q.val < currentNode.val:
                currentNode = currentNode.left
            else:
                return currentNode