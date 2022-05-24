// https://www.youtube.com/watch?v=tWVWeAqZ0WU
// timestamp: 17:46

// NOTE: depth first search --> think stack FIFO

// adjacency list
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const depthFirstPrint = (graph, source) => {
  let stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const depthFirstPrintRecursive = (graph, source) => {
  console.log(source);

  // in this case there is an implicit base case where e is a dead end

  for (let neighbor of graph[source]) {
    depthFirstPrintRecursive(graph, neighbor);
  }
};

depthFirstPrint(graph, "a");
