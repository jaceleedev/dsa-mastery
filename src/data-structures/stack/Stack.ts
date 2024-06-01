export class Stack<T> {
  items: T[];
  count: number;

  constructor() {
    this.items = [];
    this.count = 0;
  }
}
