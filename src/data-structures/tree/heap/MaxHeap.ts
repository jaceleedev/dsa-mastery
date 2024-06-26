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

  /**
   * 힙에서 최대값을 제거하고 반환합니다.
   * @returns {T | null} - 힙에서 제거된 최대값 또는 null (힙이 비어 있는 경우).
   */
  poll(): T | null {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop()!;
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();

    return max;
  }

  /**
   * 힙의 최대값을 제거하지 않고 반환합니다.
   * @returns {T | null} - 힙의 최대값 또는 null (힙이 비어 있는 경우).
   */
  peek(): T | null {
    return this.heap.length !== 0 ? this.heap[0] : null;
  }

  /**
   * 힙의 루트 노드를 새로운 값으로 교체하고 힙 속성을 유지합니다.
   * @param {T} value - 교체할 새로운 값.
   * @returns {T | null} - 교체된 이전 최대값 또는 null (힙이 비어 있는 경우).
   */
  replaceRoot(value: T): T | null {
    if (this.heap.length === 0) {
      return null;
    }

    const max = this.heap[0];
    this.heap[0] = value;
    this.heapifyDown();

    return max;
  }

  /**
   * 힙을 비웁니다. 모든 요소를 제거합니다.
   */
  clear(): void {
    this.heap = [];
  }

  /**
   * 특정 값이 힙에 있는지 확인합니다.
   * @param {T} value - 확인할 값.
   * @returns {boolean} - 값이 힙에 있으면 true, 그렇지 않으면 false.
   */
  contains(value: T): boolean {
    return this.heap.includes(value);
  }
}
