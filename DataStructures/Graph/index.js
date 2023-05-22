// 节点，记录节点的信息，记录相邻的节点
class Node {
  constructor(value) {
    this.value = value; // 本人的姓名
    this.edges = new Map(); // 本人的所有朋友和亲密度
  }

  // 结交1个朋友，同时设置亲密度
  addEdge(node, weight = 0) {
    this.edges.set(node, weight);
  }

  // 和一个朋友断交（意味着亲密度消失）
  removeEdge(node) {
    this.edges.delete(node);
  }

  // 获取所有的朋友和亲密度
  getEdge() {
    return this.edges;
  }
}

// 图，记录所有人
class Graph {
  constructor() {
    this.nodes = new Map(); // 所有人，N个人的姓名和他的私人信息
  }

  // 把一个新人添加到图中
  addNode(value) {
    // 生成一个新人的私人信息
    const node = new Node(value);
    // 把 新人的姓名 和 他的私人信息 添加到图中
    this.nodes.set(value, node);

    // 用于添加关系。（如果查无此人，则创建这个人）
    return node;
  }

  // 删除一个人
  removeNode(value) {
    // 获取待删除的人
    const nodeToDelete = this.nodes.get(value);
    if(!nodeToDelete) return null;

    // 把这个人的所有社交关系全部掐断
    for(const node of this.nodes.values()) {
      node.removeEdge(nodeToDelete);
    }

    // 删除这个人
    this.nodes.delete(value);
  }

  // 获取所有的人
  getNodes() {
    return this.nodes;
  }

  // 获取某人的私人信息
  getNode(value) {
    return this.nodes.get(value);
  }

  // 两个朋友结交，并设置亲密度
  addEdge(node1Value, node2Value, weight = 0) {
    // 获取两个人的私人信息
    const node1 = this.nodes.get(node1Value);
    const node2 = this.nodes.get(node2Value);

    // 在私人信息中，添加朋友
    node1.addEdge(node2, weight);
    node2.addEdge(node1, weight);

    return [node1, node2];
  }

  // 两个朋友断交
  removeEdge(node1Value, node2Value) {
    const node1 = this.nodes.get(node1Value) || this.addNode(node1Value);
    const node2 = this.nodes.get(node2Value) || this.addNode(node2Value);

    if(!node1 || !node2) return;

    node1.removeEdge(node2);
    node2.removeEdge(node1);
  }
}
