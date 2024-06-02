export class Queue<T> {
  elements: T[];
  start: number;

  constructor() {
    this.elements = [];
    this.start = 0;
  }

  enqueue(element: T): void {
    this.elements.push(element);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return;
    }

    const element = this.elements[this.start];
    ++this.start;

    if (this.start * 2 > this.elements.length) {
      this.elements = this.elements.slice(this.start);
      this.start = 0;
    }

    return element;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return;
    }

    return this.elements[this.start];
  }

  isEmpty(): boolean {
    return this.start >= this.elements.length;
  }
}
