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
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
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
    let rslt = [];
    queue.push(start);
    visited.add(start);
    while (queue.length > 0) {
      let v = queue.shift();
      rslt.push(v);
      console.log(v);
      for (let n of this.adjacencyList[v]) {
        if (!visited.has(n)) {
          visited.add(n);
          queue.push(n);
        }
      }
    }
    return rslt;
  }

  dfs(start, visited = new Set()) {
    if (!start) return;
    visited.add(start);
    console.log(start);
    for (let n of this.adjacencyList[start]) {
      if (!visited.has(n)) {
        this.dfs(n, visited);
      }
    }
  }
}
