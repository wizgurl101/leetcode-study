# https://leetcode.com/problems/last-stone-weight/
# Neetcode: https://www.youtube.com/watch?v=B-QCq79-Vfw&list=PLot-Xpze53lfQmTEztbgdp8ALEoydvnRQ&index=23

# Priority queue with Max Heap Note: Python does not have a max heap
# so here a min heap is used and number be negative to have it 
# behave as a max heap

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = [-s for s in stones]
        heapq.heapify(stones)

        while len(stones) > 1:
            first = heapq.heapop(stones)
            second = heapq.heappop(stones)

            if second > first:
                heapq.heappush(stones, first - second)

        stones.append(0)
        return abs(stones[0])