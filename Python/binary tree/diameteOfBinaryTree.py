# https://leetcode.com/problems/diameter-of-binary-tree/
# Neetcode: https://www.youtube.com/watch?v=bkxqA8Rfv04&t=75s
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        result = [0]

        def dfs(root):
            # case base for this recurive solution
            if not root:
                return -1
            
            leftSubTreeHeight = dfs(root.left)
            rightSubTreeHeight = dfs(root.right)

            result[0] = max(result[0], 2 + leftSubTreeHeight + rightSubTreeHeight)

            return 1 + max(leftSubTreeHeight + rightSubTreeHeight)

        dfs(root)
        return result[0]