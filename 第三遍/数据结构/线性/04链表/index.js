class Node {
  constructor(value) {
    this.value = value; // 数据域
    this.next = null; // 后继指针
    this.prev = null; // 前驱指针
  }
}

class NodeList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNode(value, index) {
    // 创建一个节点
    const node = new Node(value);
    
    // if ()

    // this.head为空
    if(!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    // 如果不为空
    this.tail = node;
    let current = this.head;
    for(let i = 1; i < this.length; i++) {
      current = current.next;
    }
    current.next = node;
    this.length++;
  }

  getNodeList() {
    // 如果没有节点，打印null
    if (!this.length) {
      return console.log(null);
    }

    let current = this.head;
    const result = [];
    result.push(current.value);
    for(let i = 1; i < this.length; i++) {
      current = current.next;
      result.push(current.value);
    }
    return result;
  }
}

const nodeList = new NodeList();
nodeList.getNodeList();
console.log('a');
nodeList.addNode(1);
console.log('b');
nodeList.addNode(2);
console.log('c');
nodeList.addNode(3);
nodeList.getNodeList();
