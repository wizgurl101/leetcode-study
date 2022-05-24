# https://leetcode.com/problems/lru-cache/

# Neetcode: https://www.youtube.com/watch?v=7ABFKPK2hD4
# https://github.com/neetcode-gh/leetcode/blob/main/146-LRU-Cache.py
# Back to Back SWE: https://www.youtube.com/watch?v=S6IfqDXWa10

# Data structure: hash map & doubly linked list

class Node:
    def __init__(self, key, val):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        # will map the key to the node
        self.cache = {}

        # dummy pointer/node to tells us what is the least frquency used (LRU) and most recent
        self.left, self.right = Node(0, 0), Node(0, 0)
        # left pointer will tells which node is LRU
        # right pointer will tells which node is most recently added
        self.left.next, self.right.next = self.right, self.left

    # remove from the linked list
    def remove(self, node):
        prev, next = node.prev, node.next
        prev.next, next.prev = next, prev

    # insert at right 
    def insert(self, node):
        prev, nxt = self.right.prev, self.right
        prev.next = nxt.prev = node
        node.next, node.prev = nxt, prev

    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return self.cache[key].val
        return -1
        

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])

        self.cache[key] = Node(key, value)
        self.insert(self.cache[key])
        
        if len(self.cache) > self.capacity:
            # remove from the list and delete the LRU from the hashmap/cache
            lru = self.left.next
            self.remove(lru)
            print(lru in self.cache)
            del self.cache[lru.key]



# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)