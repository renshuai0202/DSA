// https://leetcode.cn/problems/implement-stack-using-queues/description/?languageTags=javascript
class MyStack {
  queue: number[];
  _queue: number[];
  
  constructor() {
    this.queue = [];
    this._queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    while(this.queue.length > 1) {
      this._queue.push(this.queue.shift()!);
    }
    const ans: number = this.queue.shift()!;
    while(this._queue.length) {
      this.queue.push(this._queue.shift()!);
    }
    return ans;
  }

  top(): number {
    return this.queue[this.queue.length - 1];
  }

  empty(): boolean {
    return !this.queue.length;
  }
}