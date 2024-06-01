export class Stack<T> {
  items: T[];
  size: number;

  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(data: T): void {
    this.items.push(data);
    ++this.size;
  }

  pop(): T {
    if (this.size === 0) {
      throw new Error('Stack is empty');
    }

    --this.size;
    const element = this.items[this.size];
    this.items.splice(this.size, 1);

    return element;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  length(): number {
    return this.size;
  }

  clear(): void {
    this.items = [];
    this.size = 0;
  }

  print(): void {
    for (let i = this.size - 1; i >= 0; --i) {
      console.log(this.items[i]);
    }
  }
}
