class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // 向树中插入一个节点
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // 递归地向树中插入一个节点
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 删除一个节点
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  // 递归地删除一个节点
  removeNode(node, value) {
    if (!node) {
      return null;
    }
    if (value === node.value) {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      const temp = this.getMin(node.right);
      node.value = temp.value;
      node.right = this.removeNode(node.right, temp.value);
      return node;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else {
      node.right = this.removeNode(node.right, value);
      return node;
    }
  }

  // 获取二叉树中最小的节点
  getMin(node = this.root) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}

// 创建一个二叉树
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(1);
tree.insert(8);

// 删除一个节点
tree.remove(15);

// 中序遍历输出节点值
const printNodeValue = (node) => {
  if (node) {
    printNodeValue(node.left);
    console.log(node.value);
    printNodeValue(node.right);
  }
};
printNodeValue(tree.root);
