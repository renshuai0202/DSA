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
var MyNode = /** @class */ (function () {
    function MyNode(value, pre, next) {
        this.value = value === undefined ? null : value;
        this.pre = pre === undefined ? null : pre;
        this.next = next === undefined ? null : next;
    }
    return MyNode;
}());
var MyLinkedList = /** @class */ (function () {
    function MyLinkedList() {
        this.size = 0;
        // 在不操作的情况下，head是第一个节点的指针
        this.head = new MyNode();
    }
    MyLinkedList.prototype.get = function (index) {
        var _a;
        if (index < 0 || index >= this.size)
            return -1;
        var preNode = this.head;
        for (var i = 0; i < index; i++) {
            preNode = preNode === null || preNode === void 0 ? void 0 : preNode.next;
        }
        return (_a = preNode === null || preNode === void 0 ? void 0 : preNode.next) === null || _a === void 0 ? void 0 : _a.value;
    };
    MyLinkedList.prototype.addAtHead = function (val) {
        this.addAtIndex(0, val);
    };
    MyLinkedList.prototype.addAtTail = function (val) {
        this.addAtIndex(this.size, val);
    };
    MyLinkedList.prototype.addAtIndex = function (index, val) {
        if (index < 0 || index > this.size)
            return;
        var preNode = this.head;
        for (var i = 0; i < index; i++) {
            preNode = preNode === null || preNode === void 0 ? void 0 : preNode.next;
        }
        var currentNode = new MyNode(val);
        currentNode.next = preNode.next;
        preNode.next = currentNode;
        currentNode.pre = preNode;
        if (currentNode.next)
            currentNode.next.pre = currentNode;
        this.size++;
    };
    MyLinkedList.prototype.deleteAtIndex = function (index) {
        var _a;
        if (index < 0 || index >= this.size)
            return;
        var preNode = this.head;
        for (var i = 0; i < index; i++) {
            preNode = preNode === null || preNode === void 0 ? void 0 : preNode.next;
        }
        var deletedNode = preNode === null || preNode === void 0 ? void 0 : preNode.next;
        if ((_a = preNode === null || preNode === void 0 ? void 0 : preNode.next) === null || _a === void 0 ? void 0 : _a.next)
            preNode.next = preNode.next.next;
        if (deletedNode === null || deletedNode === void 0 ? void 0 : deletedNode.next)
            deletedNode.next.pre = preNode;
        deletedNode.next = null;
        deletedNode.pre = null;
        this.size--;
    };
    return MyLinkedList;
}());
