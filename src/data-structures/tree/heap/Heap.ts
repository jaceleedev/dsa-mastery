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

  /**
   * 힙에서 최소값을 제거하고 반환합니다.
   * @returns {T | null} - 힙에서 제거된 최소값 또는 null (힙이 비어 있는 경우).
   */
  poll(): T | null {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop()!;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();

    return min;
  }

  /**
   * 힙의 최소값을 제거하지 않고 반환합니다.
   * @returns {T | null} - 힙의 최소값 또는 null (힙이 비어 있는 경우).
   */
  peek(): T | null {
    return this.heap.length !== 0 ? this.heap[0] : null;
  }

  /**
   * 힙의 루트 노드를 새로운 값으로 교체하고 힙 속성을 유지합니다.
   * @param {T} value - 교체할 새로운 값.
   * @returns {T | null} - 교체된 이전 최소값 또는 null (힙이 비어 있는 경우).
   */
  replaceRoot(value: T): T | null {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    this.heap[0] = value;
    this.heapifyDown();

    return min;
  }

  /**
   * 힙을 비웁니다. 모든 요소를 제거합니다.
   */
  clear() {
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

  /**
   * 힙의 요소를 배열로 반환합니다.
   * @returns {T[]} - 힙의 요소를 담은 배열.
   */
  toArray(): T[] {
    return [...this.heap];
  }

  /**
   * 주어진 배열로 힙을 생성합니다.
   * @param {T[]} array - 힙으로 만들 배열.
   */
  buildHeap(array: T[]): void {
    this.heap = array;

    for (let i = Math.floor(this.heap.length / 2); i >= 0; --i) {
      this.heapifyDown(i);
    }
  }

  /**
   * 힙의 현재 크기를 반환합니다.
   * @returns {number} - 힙의 크기.
   */
  size(): number {
    return this.heap.length;
  }

  /**
   * 힙이 비어 있는지 확인합니다.
   * @returns {boolean} - 힙이 비어 있으면 true, 그렇지 않으면 false.
   */
  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  /**
   * 힙 정렬을 수행하여 배열을 오름차순으로 정렬합니다.
   * @param {T[]} array - 정렬할 배열.
   * @returns {T[]} - 정렬된 배열.
   */
  heapSort(array: T[]): T[] {
    this.buildHeap(array);

    for (let i = array.length - 1; i >= 0; --i) {
      [array[0], array[i]] = [array[i], array[0]];
      this.heapifyDown(0, i);
    }

    return array;
  }

  /**
   * 힙의 유효성을 검사합니다.
   * @returns {boolean} - 힙이 유효하면 true, 그렇지 않으면 false.
   */
  isValidHeap(): boolean {
    for (let i = 0; i < this.heap.length; ++i) {
      const left = this.getLeftChildIndex(i);
      const right = this.getRightChildIndex(i);

      if (left < this.heap.length && this.heap[i] > this.heap[left]) {
        return false;
      }

      if (right < this.heap.length && this.heap[i] > this.heap[right]) {
        return false;
      }
    }

    return true;
  }
}
