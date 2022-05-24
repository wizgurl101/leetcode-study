/*

Iterative breadth-first search (BFS) approach

Time complexity: O(E)
Space complexity: O(V+E)

Steps:
------------------------------------------------
  1.  form an adjacency list
  2.  initialize queue with start node
  3.  dequeue a node
        - if node is the end node return true
  4.  mark node as visited
  5.  add node's unvisited neighbors to queue
  6.  if all node's in queue have been processed that means there is no path from start to end, so return false

 */

const validPath = function (n, edges, start, end) {
  const graph = new Map();

  // create our adjacency list
  edges.forEach(([a, b]) => {
    if (!graph.has(a)) {
      graph.set(a, []);
    }

    if (!graph.has(b)) {
      graph.set(b, []);
    }

    graph.get(a).push(b);
    graph.get(b).push(a);
  });

  // prevent revisiting nodes
  const visited = new Array(n);
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift(); // this is an O(n) operation here. if we used a real queue the dequeue method would be O(1)

    if (node === end) {
      return true;
    }

    visited[node] = true;

    graph.get(node).forEach((neighbor) => {
      if (!visited[neighbor]) {
        queue.push(neighbor);
      }
    });
  }

  return false;
};
