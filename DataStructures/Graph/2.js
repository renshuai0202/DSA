class Node {
  constructor(value) {
    this.value = value;
    this.edges = new Map();
  }

  addEdge(node, weight = 0) {
    this.edges.set(node, weight);
  }

  removeEdge(node) {
    this.edges.delete(node);
  }

  getEdges() {
    return this.edges;
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(value) {
    const node = new Node(value);
    this.nodes.set(value, node);
    return node;
  }

  removeNode(value) {
    const nodeToDelete = this.nodes.get(value);
    if (!nodeToDelete) return null;

    for(const node of this.nodes.values()) {
      node.removeEdge(node);
    }

    this.nodes.delete(value);
  }
  

  getNode(value) {
    return this.nodes.get(value);
  }

  addEdge(node1Value, node2Value, weight = 0) {
    const node1 = this.nodes.get(node1Value) || this.addNode(node1Value);
    const node2 = this.nodes.get(node2Value) || this.addNode(node2Value);

    node1.addEdge(node2, weight);
    node2.addEdge(node1, weight);

    return [node1, node2];
  }

  removeEdge(node1Value, node2Value) {
    const node1 = this.nodes.get(node1Value);
    const node2 = this.nodes.get(node2Value);

    if(!node1 || !node2) return null;

    node1.removeEdge(node2);
    node2.removeEdge(node1);
  }
}