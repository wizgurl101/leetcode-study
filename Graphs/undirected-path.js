/**
    https://www.youtube.com/watch?v=tWVWeAqZ0WU
    timestamp: 50:47

    https://structy.net/problems/undirected-path

    Write a function, undirectedPath, that takes in an array of edges for an undirected graph and 
    two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there 
    exists a path between nodeA and nodeB.
*/

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// generate an adjacency list for a graph
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

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
  if (visited.has(src)) return false;

  if (src === dst) return true;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) return true;
  }

  return false;
};
