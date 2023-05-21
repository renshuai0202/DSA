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

  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // 递归地向树中插入一个节点
  insertNode(node, newNode) {
    if(newNode.value < node.value) {
      if(!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if(!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    this.searchValueFromNode(this.root, value);
  }

  searchValue(node, value) {
    if(!node) {
      console.log('没找到');
      return;
    } else if(value === node.value) {
      console.log('找到了');
      return;
    } else if(value < node.value) {
      this.searchValue(node.left, value);
    } else {
      this.searchValue(node.right, value);
    }
  }
}

const binaryTree = new BinaryTree();

binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(1);
binaryTree.insert(8);

binaryTree.search(1);
binaryTree.search(8);
binaryTree.search(100);