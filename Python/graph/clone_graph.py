# https://leetcode.com/problems/clone-graph/
# neetcode: https://www.youtube.com/watch?v=mQeF6bN8hMk

class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        oldToNew = {}

        # using depth first search
        def clone(node):
            # if we already clone that node, just return the clone
            if node in oldToNew:
                return oldToNew[node]

            copy = Node(node.val)
            oldToNew[node] = copy

            for neighbour in node.neighbors:
                copy.neighbors.append(clone(neighbour))

            return copy

        return clone(node) if node else None