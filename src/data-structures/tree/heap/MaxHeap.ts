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
  buildHeap(array: T[]) {
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
   * 힙 정렬을 수행하여 배열을 내림차순으로 정렬합니다.
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

      if (left < this.heap.length && this.heap[i] < this.heap[left]) {
        return false;
      }

      if (right < this.heap.length && this.heap[i] < this.heap[right]) {
        return false;
      }
    }

    return true;
  }

  /**
   * 부모 노드 인덱스를 반환합니다.
   * @param {number} index - 현재 노드 인덱스.
   * @returns {number} - 부모 노드 인덱스.
   */
  getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  /**
   * 왼쪽 자식 노드 인덱스를 반환합니다.
   * @param {number} index - 현재 노드 인덱스.
   * @returns {number} - 왼쪽 자식 노드 인덱스.
   */
  getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  /**
   * 오른쪽 자식 노드 인덱스를 반환합니다.
   * @param {number} index - 현재 노드 인덱스.
   * @returns {number} - 오른쪽 자식 노드 인덱스.
   */
  getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  /**
   * 힙 속성을 유지하도록 상향 조정합니다.
   * @param {number} [index=this.heap.length - 1] - 상향 조정을 시작할 인덱스 (기본값은 마지막 요소).
   */
  heapifyUp(index: number = this.heap.length - 1): void {
    while (
      index > 0 &&
      this.heap[this.getParentIndex(index)] < this.heap[index]
    ) {
      const temp = this.heap[this.getParentIndex(index)];
      this.heap[this.getParentIndex(index)] = this.heap[index];
      this.heap[index] = temp;

      index = this.getParentIndex(index);
    }
  }

  /**
   * 힙 속성을 유지하도록 하향 조정합니다.
   * @param {number} [index=0] - 시작 인덱스 (기본값은 0).
   * @param {number} [length=this.heap.length] - 하향 조정을 수행할 범위 길이 (기본값은 힙의 길이).
   */
  heapifyDown(index: number = 0, length: number = this.heap.length) {
    while (this.getLeftChildIndex(index) < length) {
      let largeChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      if (this.heap[largeChildIndex] < this.heap[rightChildIndex]) {
        largeChildIndex = rightChildIndex;
      }

      if (this.heap[index] > this.heap[largeChildIndex]) {
        break;
      }

      const temp = this.heap[largeChildIndex];
      this.heap[largeChildIndex] = this.heap[index];
      this.heap[index] = temp;

      index = largeChildIndex;
    }
  }

  /**
   * 병합 기능: 다른 힙을 현재 힙과 병합합니다.
   * @param {MaxHeap<T>} otherHeap - 병합할 다른 힙.
   */
  merge(otherHeap: MaxHeap<T>): void {
    for (const value of otherHeap.toArray()) {
      this.insert(value);
    }
  }

  /**
   * k번째 최대값 찾기
   * @param {number} k - k번째 최대값의 순서.
   * @returns {T | null} - k번째 최대값 또는 null (유효하지 않은 k 값의 경우).
   */
  findKthLargest(k: number): T | null {
    if (k <= 0 || k > this.heap.length) {
      throw new Error('Invalid value of k');
    }

    const tempHeap = new MaxHeap<T>();
    tempHeap.buildHeap([...this.heap]);

    let kthLargest: T | null = null;

    for (let i = 0; i < k; ++i) {
      kthLargest = tempHeap.poll();
    }

    return kthLargest;
  }
}
