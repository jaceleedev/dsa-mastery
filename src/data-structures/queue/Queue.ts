export class Queue<T> {
  elements: T[];
  start: number;

  constructor() {
    this.elements = [];
    this.start = 0;
  }
}
