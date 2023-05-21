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
    this.searchValue(this.root, value);
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

  delete(value) {
    // 第1步 找到节点
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if(!node) {
      console.log('删除失败，没有此值');
      // 为什么返回null，把这个节点当作根节点，返回值作为this.root的值
      return null;
    } else if(value === node.value) {
      console.log('删除时 找到了');
      // 第2步 判断
      // 2.1 如果此节点没有子节点，则删除此节点
      if (!node.left && !node.right) {
        // 为什么返回null，把这个节点当作根节点，返回值作为this.root的值
        return null;
      }
      // 2.2 有一个子节点
      if (!node.left) {
        return node.right;
      }
      // 2.2 有一个子节点
      if (!node.right) {
        return node.left;
      }
      // 2.3 有两个子节点
      // 2.3.1 找到最小的节点，右子树的最小左子节点
      const minNode = this.getMinNode(node.right);
      // 待删除的节点的值，要为右子树的最小左节点的值
      node.value = minNode.value;
      // 删除右子树的最小左节点
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    } else if(value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else {
      node.right = this.removeNode(node.right, value);
      return node;
    }
  }

  getMinNode(node = this.root) {
    while(node.left) {
      node = node.left;
    }
    return node;
  }

  preOrderTraversal(node) {
    if(node) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
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

binaryTree.preOrderTraversal(binaryTree.root);

binaryTree.delete(1);
console.log('-----');
binaryTree.preOrderTraversal(binaryTree.root);

// 如果待删除的节点，没有子节点，则直接删除
// 如果待删除的节点，有一个子节点，则删除节点后，将子节点放到被删除节点的位置
// 如果待删除的节点，有两个子节点，且其右节点树的最左节点没有子节点，则将这个节点放到被删除节点的位置
// 如果待删除的节点，有两个子节点，且其右节点数的最左节点有右节点，则将这个右节点，放到其被挖的父节点的位置，被挖的父节点放到被删除的节点的位置