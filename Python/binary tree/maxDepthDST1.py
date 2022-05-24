# https://leetcode.com/problems/maximum-depth-of-binary-tree/
# this depth first search with recursion

# Neetcode: https://www.youtube.com/watch?v=hTM3phVI6YQ
from collections import deque

# Depth first search recursive solution
class Solution1:
    def maxDepth(self, root: TreeNode) -> int:
        # base case
        if not root:
            return 0

        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))

# Depth first search iterative solution (Pre-order)
# Using a stack to be used as a call-stack
class Solution2:
    def maxDepth(self, root: TreeNode) -> int:
        # base case
        if not root:
            return 0

        stack = [[root, 1]]
        results = 1

        while stack:
            node, depth = stack.pop()

            if node:
                result = max(result, depth)
                stack.append([node.left, depth + 1])
                stack.append([node.right, depth + 1])

            # alternative
            # if node.left:
            #     stack.append([node.left, depth+1])    
            # if node.right:                                
            #     stack.append([node.right, depth+1])
                  
        return results

# Breath first search iterative solution
# include a queue to store node at each level
class Solution3:
    def maxDepth(self, root: TreeNode) -> int:
        # base case
        if not root:
            return 0

        # current level
        level = 0
        queue = deque([root])

        while queue:
            for i in range(len(queue)):
                node = queue.popLeft()

            # if the left child of the node is not null
            if node.left:
                queue.append(node.left)
            # if the right child of the node is not null
            if node.right:
                queue.append(node.right)

            level += 1
        
        # return the total number of level within the BST
        return level





