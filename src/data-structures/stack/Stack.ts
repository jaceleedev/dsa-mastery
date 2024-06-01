export class Stack<T> {
  items: T[];
  size: number;

  constructor() {
    this.items = [];
    this.size = 0;
  }

  /**
   * 스택에 데이터를 추가합니다.
   * @param {T} data - 스택에 추가할 데이터입니다.
   */
  push(data: T): void {
    this.items.push(data);
    ++this.size;
  }

  /**
   * 스택에서 데이터를 제거하고 반환합니다.
   * @returns {T} 스택에서 제거된 데이터입니다.
   * @throws {Error} 스택이 비어있으면 오류를 던집니다.
   */
  pop(): T {
    if (this.size === 0) {
      throw new Error('Stack is empty');
    }

    --this.size;
    const element = this.items[this.size];
    this.items.splice(this.size, 1);

    return element;
  }

  /**
   * 스택의 맨 위에 있는 데이터를 반환합니다.
   * @returns {T} 스택의 맨 위에 있는 데이터입니다.
   * @throws {Error} 스택이 비어있으면 오류를 던집니다.
   */
  peek(): T {
    if (this.size === 0) {
      throw new Error('Stack is empty');
    }

    return this.items[this.size - 1];
  }

  /**
   * 스택이 비어있는지 확인합니다.
   * @returns {boolean} 스택이 비어있으면 true, 그렇지 않으면 false를 반환합니다.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 스택의 크기를 반환합니다.
   * @returns {number} 스택의 크기입니다.
   */
  length(): number {
    return this.size;
  }

  /**
   * 스택을 배열로 변환합니다.
   * @returns {T[]} 스택의 모든 요소를 포함하는 배열을 반환합니다.
   */
  toArray(): T[] {
    return this.items.slice(0, this.size);
  }

  /**
   * 스택을 지웁니다.
   * 스택의 모든 요소를 제거하고, 스택의 크기를 0으로 설정합니다.
   */
  clear(): void {
    this.items = [];
    this.size = 0;
  }

  /**
   * 스택을 콘솔에 출력합니다.
   * 스택의 각 요소를 새로운 줄로 출력합니다.
   */
  print(): void {
    let result = '';
    for (let i = this.size - 1; i >= 0; --i) {
      result += `${this.items[i]}\n`;
    }
    console.log(result);
  }
}
