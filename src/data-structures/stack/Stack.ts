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
}
