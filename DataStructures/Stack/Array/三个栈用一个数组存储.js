// 三合一。描述如何只用一个数组来实现三个栈。

// 你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。stackNum表示栈下标，value表示压入的值。

// 构造函数会传入一个stackSize参数，代表每个栈的大小。

// 示例1:

//  输入：
// ["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]
// [[1], [0, 1], [0, 2], [0], [0], [0], [0]]
//  输出：
// [null, null, null, 1, -1, -1, true]
// 说明：当栈为空时`pop, peek`返回-1，当栈满时`push`不压入元素。
// 示例2:

//  输入：
// ["TripleInOne", "push", "push", "push", "pop", "pop", "pop", "peek"]
// [[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]
//  输出：
// [null, null, null, null, 2, 1, -1, -1]
 

// 提示：

// 0 <= stackNum <= 2
function TripleInOne(stackSize) {
  this.size = stackSize;
  // 前三个元素，分别记录三个栈的使用长度
  this.stack = new Array(3 + stackSize * 3).fill(0);
}

TripleInOne.prototype.push = function(stackNum, value) {
  // 单栈的长度有限，如果存满了，则不能继续存
  if(this.stack[stackNum] === this.size) return;
  // 找到那个栈的栈顶，存入，更新此栈的长度记录
  this.stack[3 + this.size * stackNum + this.stack[stackNum]] = value;
  this.stack[stackNum]++;
}

TripleInOne.prototype.pop = function(stackNum) {
  // 如果此栈为空，则返回-1
  if(!this.stack[stackNum]) return -1;
  let ans = this.stack[3 + stackNum * this.size + this.stack[stackNum] - 1];
  // 因为改变了栈的长度记录，所以可不处理垃圾数据，节省性能
  // this.stack[3 + stackNum * 10 + this.stack[stackNum]] = undefined;
  this.stack[stackNum]--;
  return ans;
}

TripleInOne.prototype.peek = function(stackNum) {
  // 如果此栈为空，则返回-1
  if(!this.stack[stackNum]) return -1;
  let ans = this.stack[3 + stackNum * this.size + this.stack[stackNum] - 1];
  return ans;
}

TripleInOne.prototype.isEmpty = function(stackNum) {
  return !this.stack[stackNum];
}

const tripleInOne = new TripleInOne(1);
tripleInOne.push(0, 1);
tripleInOne.push(0, 2);
console.log(tripleInOne.stack);
console.log(tripleInOne.pop(0, 1));

