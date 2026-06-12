class Graph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = new Set();
    }
  }

  addEdges(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.addVertex(v1);
    }
    if (!this.adjacencyList[v2]) {
      this.addVertex(v2);
    }
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  hasEdge(v1, v2) {
    return this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1].delete(v2);
    this.adjacencyList[v2].delete(v1);
  }

  print() {
    for (let i in this.adjacencyList) {
      console.log(i + " -->" + [...this.adjacencyList[i]]);
    }
  }

  removeVertex(v) {
    if (!this.adjacencyList[v]) {
      return;
    }
    for (let adj of this.adjacencyList[v]) {
      this.removeEdge(v, adj);
    }
    delete this.adjacencyList[v];
  }

  bfs(start) {
    let queue = [];
    let visited = new Set();
    queue.push(start);
    visited.add(start);
    while (queue.length > 0) {
      let v = queue.shift();
      console.log(v);
      for (let n of this.adjacencyList[v]) {
        if (!visited.has(n)) {
          visited.add(n);
          queue.push(n);
        }
      }
    }
  }

  dfs(start) {
    let stack = [];
    let visited = new Set();
    stack.push(start);
    while (stack.length > 0) {
      let v = stack.pop();
      if (!visited.has(v)) {
        visited.add(v);
        console.log(v);
        for (let n of this.adjacencyList[v]) {
          if (!visited.has(n)) {
            stack.push(n);
          }
        }
      }
    }
  }

  hasCycle() {
    let visited = new Set();
    for (let start in this.adjacencyList) {
      if (!visited.has(start)) {
        let queue = [[start, null]];
        visited.add(start);
        while (queue.length) {
          let [vertex, parent] = queue.shift();
          for (let adj of this.adjacencyList[vertex]) {
            if (!visited.has(adj)) {
              visited.add(adj);
              queue.push([adj, vertex]);
            } else if (adj !== parent) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}