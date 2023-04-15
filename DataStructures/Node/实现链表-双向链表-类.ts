// 你可以选择使用单链表或者双链表，设计并实现自己的链表。

// 单链表中的节点应该具备两个属性：val 和 next 。val 是当前节点的值，next 是指向下一个节点的指针/引用。

// 如果是双向链表，则还需要属性 prev 以指示链表中的上一个节点。假设链表中的所有节点下标从 0 开始。

// 实现 MyLinkedList 类：

// MyLinkedList() 初始化 MyLinkedList 对象。
// int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
// void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
// void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
// void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
// void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。

// 示例
// 输入
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// 输出
// [null, null, null, null, 2, null, 3]

// 解释
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
// myLinkedList.get(1);              // 返回 2
// myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
// myLinkedList.get(1);              // 返回 3
class MyNode {
  value: number| null;
  pre: MyNode | null;
  next: MyNode | null;
  constructor(value?: number, pre?: MyNode, next?: MyNode) {
      this.value = value === undefined ? null : value;
      this.pre = pre === undefined ? null : pre;
      this.next = next === undefined ? null : next;
  }
}

class MyLinkedList {
  size: number;
  head: MyNode;
  constructor() {
      this.size = 0;
      // 在不操作的情况下，head是第一个节点的指针
      this.head = new MyNode();
  }

  get(index: number): number {
      if(index < 0 || index >= this.size) return -1;
      let preNode: MyNode | null = this.head;
      for(let i = 0; i < index; i++) {
          preNode = preNode?.next!;
      }
      return preNode?.next?.value!;
  }

  addAtHead(val: number): void {
      this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
      this.addAtIndex(this.size, val);
  }

  addAtIndex(index: number, val: number): void {
      if(index < 0 || index > this.size) return;
      let preNode: MyNode | null = this.head;
      for(let i = 0; i < index; i++) {
          preNode = preNode?.next!;
      }
      const currentNode: MyNode = new MyNode(val);
      currentNode.next = preNode.next;
      preNode.next = currentNode;
      currentNode.pre = preNode;
      if(currentNode.next) currentNode.next.pre = currentNode;
      this.size++;
  }

  deleteAtIndex(index: number): void {
      if(index < 0 || index >= this.size) return;
      let preNode: MyNode | null = this.head;
      for(let i = 0; i < index; i++) {
          preNode = preNode?.next!;
      }
      const deletedNode = preNode?.next!;
      if(preNode?.next?.next) preNode.next = preNode.next.next;
      if(deletedNode?.next) deletedNode.next.pre = preNode;
      deletedNode.next = null;
      deletedNode.pre = null;
      this.size--;
  }
}