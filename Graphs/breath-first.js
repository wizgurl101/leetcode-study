// https://www.youtube.com/watch?v=tWVWeAqZ0WU
// timestamp: 25:47

// NOTE: breath first search --> think queue FILO

// adjacency list
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const breathFirstPrint = (graph, source) => {
  let queue = [source];

  while (queue.length > 0) {
    const current = queue.shift(); // remove first element

    for (let neighbor of graph[current]) {
      queue.push(neighbor); // add to the end
    }
  }
};

breathFirstPrint(graph, "a");
