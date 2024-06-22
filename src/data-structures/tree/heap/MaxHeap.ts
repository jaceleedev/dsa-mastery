export class MaxHeap<T> {
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

  /**
   * 특정 위치의 값을 업데이트하고 힙 속성을 유지합니다.
   * @param {number} index - 값을 업데이트할 요소의 인덱스.
   * @param {T} value - 업데이트할 값.
   */
  updateAt(index: number, value: T): void {
    if (index < 0 || index >= this.heap.length) {
      throw new Error('Index out of bounds');
    }

    const oldValue = this.heap[index];
    this.heap[index] = value;

    if (value > oldValue) {
      this.heapifyUp(index);
    } else {
      this.heapifyDown(index);
    }
  }

  /**
   * 특정 인덱스의 요소를 삭제합니다.
   * @param {number} index - 삭제할 요소의 인덱스.
   */
  deleteAt(index: number): void {
    if (index < 0 || index >= this.heap.length) {
      throw new Error('Index out of bounds');
    }

    this.heap[index] = this.heap.pop()!;
    this.heapifyDown(index);
  }
}
