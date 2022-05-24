# https://leetcode.com/problems/course-schedule/
# Neetcode: https://www.youtube.com/watch?v=EgI5nU9etnU&list=PLot-Xpze53ldBT_7QA8NVot219jFNr_GI&index=2

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # adjacency list
        # use hash map, first map each courses to an empty list
        preMap = { i: [] for i in range(numCourses)}

        # set each course the array of its orerequisites
        for course, prerequisite in prerequisites:
            preMap[course].append(prerequisite)

        # create a visited set to store the node that 
        # we have already visited
        visitSet = set()

        def dfs(course):
            # first base case: course if the course node already been visited
            # detected a loop
            if course in visitSet:
                return False

            # second base case: the course have no prerequisites
            # the course can be completed
            if preMap[course] == []:
                return True

            visitSet.add(course)

            for prerequisite in preMap[course]:
                # if there is any course that cannot be completed
                # meaning there is a loop
                if not dfs(prerequisite): return False

                visitSet.remove(course)
                preMap[course] = []
                return True

        # looping like this in the case that the graph is not fuly connected
        # why there is a need to go through all courses
        for course in range(numCourses):
            if not dfs(course): return False

        return True