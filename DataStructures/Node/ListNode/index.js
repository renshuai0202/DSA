class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class ListNode {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  length() {
    return this.count;
  }

  add(value) {
    const node = new Node(value);

    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  delete(value) {
    let current = this.head,
        previous = null;
    
    while(current) {
      if(current.value === value) {
        if(!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }

        this.count--;
        return true;
      }
      previous = current;
      current = current.next;
    }

    return false;
  }

  contain(value) {
    let current = this.head,
        previous = null;
    
    while(current) {
      if(current.value === value) {
        return true;
      } else {
        previous = current;
        current = current.next;
      }
    }

    return false;
  }

  toArray() {
    let result = [],
        current = this.head;

    while(current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

const listNode = new ListNode();
listNode.add(1);
listNode.add(3);
listNode.add(5);
listNode.add(7);
listNode.add(9);
listNode.add(9);


console.log(listNode.length);
console.log(listNode.toArray());
console.log(listNode.contain(3));
console.log(listNode.delete(9));
console.log(listNode.toArray());



