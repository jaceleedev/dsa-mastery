export class Queue<T> {
  elements: T[];
  start: number;

  constructor() {
    this.elements = [];
    this.start = 0;
  }

  /**
   * 큐에 데이터를 추가합니다.
   * @param {T} element - 큐에 추가할 데이터입니다.
   */
  enqueue(element: T): void {
    this.elements.push(element);
  }

  /**
   * 큐에서 데이터를 제거하고 반환합니다.
   * @returns {T | undefined} 큐에서 제거된 데이터입니다. 큐가 비어있으면 undefined를 반환합니다.
   */
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

  /**
   * 큐의 앞에 있는 데이터를 반환합니다.
   * @returns {T | undefined} 큐의 앞에 있는 데이터입니다. 큐가 비어있으면 undefined를 반환합니다.
   */
  peek(): T | undefined {
    if (this.isEmpty()) {
      return;
    }

    return this.elements[this.start];
  }

  /**
   * 큐가 비어있는지 확인합니다.
   * @returns {boolean} 큐가 비어있으면 true, 그렇지 않으면 false를 반환합니다.
   */
  isEmpty(): boolean {
    return this.start >= this.elements.length;
  }

  /**
   * 큐의 크기를 반환합니다.
   * @returns {number} 큐의 크기입니다.
   */
  length(): number {
    return this.elements.length - this.start;
  }

  /**
   * 큐를 지웁니다.
   * 큐의 모든 요소를 제거하고, 큐의 크기를 0으로 설정합니다.
   */
  clear(): void {
    this.elements = [];
    this.start = 0;
  }

  /**
   * 큐를 배열로 변환합니다.
   * @returns {T[]} 큐의 모든 요소를 포함하는 배열을 반환합니다.
   */
  toArray(): T[] {
    return this.elements.slice(this.start);
  }

  /**
   * 큐를 콘솔에 출력합니다.
   * 큐의 모든 요소를 쉼표로 구분하여 출력합니다.
   */
  print(): void {
    console.log(this.toArray().join(', '));
  }
}
