class TripleInOne {
  size: number;
  stack: number[];
  
  constructor(stackSize) {
    this.size = stackSize;
    // 前三个元素分别记录子栈的有效使用长度
    this.stack = new Array(3 + 3 * stackSize).fill(0);
  }

  push(stackNum: 0 | 1 | 2, value: number): void {
    // 因为子栈有限长度，如果存满，则不能再存储
    if(this.stack[stackNum] === this.size) return;
    this.stack[3 + this.size * stackNum + this.stack[stackNum]] = value;
    this.stack[stackNum]++;
  }

  pop(stackNum: 0 | 1 | 2): number {
    // 如果栈为空，则返回-1
    if(this.isEmpty(stackNum)) return -1;
    const ans = this.stack[3 + this.size * stackNum + this.stack[stackNum] - 1];
    this.stack[stackNum]--;
    return ans;
  }

  peek(stackNum: 0 | 1 | 2): number {
    // 如果栈为空，则返回-1
    if(this.isEmpty(stackNum)) return -1;
    return this.stack[3 + this.size * stackNum + this.stack[stackNum] - 1];
  }

  isEmpty(stackNum: 0 | 1 | 2): boolean {
    return !this.stack[stackNum];
  }
}