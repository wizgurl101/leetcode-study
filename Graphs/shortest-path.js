/**
    https://www.youtube.com/watch?v=tWVWeAqZ0WU
    timestamp: 1:24:00

    https://www.structy.net/problems/shortest-path

    Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes 
    (nodeA, nodeB). 
    The function should return the length of the shortest path between A and B. Consider the length as 
    the number of edges in the path, not the number of nodes. If there is no path between A and B, 
    then return -1.

    Because this is an undirected graph --> need to check for cycle
*/
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  // initialize it with nodeA because it is the starting point
  const visited = new Set([nodeA]);

  // doing a breath first search --> so using a queue
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === nodeB) return distance;

    for (let neighbor of graph[node]) {
      // to prevent a cycle in a graph --> infinite loop situation
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        // since it is a neighbor the distance is current distance plus 1
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  // if while loop is finish and no nodeB was not found, no path was found
  return -1;
};

// helper function to return an adjacency list of a graph edges
const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};
