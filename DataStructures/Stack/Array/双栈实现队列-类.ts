class MyQueue {
  inStack: number[];
  outStack: number[];
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    if(!this.outStack.length) {
      this.in2out();
    }
    return this.outStack.pop()!;
  }

  peek(): number {
    if(!this.outStack.length) {
      this.in2out();
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }

  in2out(): void {
    while(this.inStack.length) {
      this.outStack.push(this.inStack.pop()!);
    }
  }
}