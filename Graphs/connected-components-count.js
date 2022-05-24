/**
    https://www.youtube.com/watch?v=tWVWeAqZ0WU
    timestamp: 1:00:48

    https://structy.net/problems/connected-components-count

    Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. 
    The function should return the number of connected components within the graph.

*/

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count++;
    }
  }

  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(`${current}`)) return false;

  visited.add(`${current}`);

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }

  return true;
};
