class Node {
  constructor(val) {
    this.val = val; // 本人的姓名
    this.edges = new Map(); // N组 朋友和亲密关系
  }
  
  // 结交1位朋友并设置亲密关系
  addEdge(node, weight = 0) {
    this.edges.set(node, weight);
  }
  
  // 获取本人的所有好朋友
  getEdges() {
    return this.edges;
  }
  
  // 拉黑一个朋友（意味着亲密关系消失）
  removeEdge(node) {
    this.edges.delete(node);
  }
}

class Graph {
  constructor() {
    this.nodes = new Map(); // 存储所有节点
  }
  
  addNode(val) {
    const node = new Node(val);
    this.nodes.set(val, node);
    return node;
  }
  
  removeNode(val) {
    const nodeToDelete = this.nodes.get(val);
    if (!nodeToDelete) return null;
    
    for (const node of this.nodes.values()) {
      node.removeEdge(nodeToDelete);
    }
    return this.nodes.delete(val);
  }
  
  getNode(val) {
    return this.nodes.get(val);
  }
  
  addEdge(node1Val, node2Val, weight = 0) {
    const node1 = this.getNode(node1Val) || this.addNode(node1Val);
    const node2 = this.getNode(node2Val) || this.addNode(node2Val);
    node1.addEdge(node2, weight);
    node2.addEdge(node1, weight);
    return [node1, node2];
  }
  
  removeEdge(node1Val, node2Val) {
    const node1 = this.getNode(node1Val);
    const node2 = this.getNode(node2Val);
    if (!node1 || !node2) return null;
    
    node1.removeEdge(node2);
    node2.removeEdge(node1);
  }
}
