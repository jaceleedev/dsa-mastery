export class MinHeap<T> {
  heap: T[];

  constructor() {
    this.heap = [];
  }

  /**
   * 힙에 새로운 값을 삽입합니다.
   * @param {T} value - 삽입할 값.
   */
  insert(value: T): void {
    this.heap.push(value);
    this.heapifyUp();
  }
}
