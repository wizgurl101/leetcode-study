/*
https://www.youtube.com/watch?v=tWVWeAqZ0WU
Timestamp: 28:00

https://structy.net/problems/has-path

has-path
Write a function, hasPath, that takes in an object representing the adjacency list of a 
directed acyclic graph and two nodes (src, dst). The function should return a boolean 
indicating whether or not there exists a directed path between the source and destination nodes.
*/
const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const hasPath = (graph, src, dst) => {
  // depth-first solution
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) {
      return true;
    }
  }

  return false;
};

const hasPath2 = (graph, src, dst) => {
  // breath-first solution
  const queue = { src };

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

hasPath(graph, "f", "k"); // true
