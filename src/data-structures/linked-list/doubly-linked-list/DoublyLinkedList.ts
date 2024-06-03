class ListNode<T> {
  data: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * 주어진 데이터로 새로운 노드를 지정된 인덱스에 삽입합니다.
   * @param {number} index - 새로운 노드를 삽입할 위치입니다. 0 이상 리스트의 크기 이하이어야 합니다.
   * @param {T} data - 새로운 노드의 데이터입니다.
   * @throws {RangeError} 인덱스가 0보다 작거나 리스트의 크기보다 큰 경우.
   */
  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.size) {
      throw new RangeError('Index out of bounds');
    }

    const newNode = new ListNode(data);

    if (index === 0) {
      if (this.head) {
        newNode.next = this.head;
        this.head.prev = newNode;
      } else {
        this.tail = newNode;
      }
      this.head = newNode;
    } else if (index === this.size) {
      newNode.prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let count = 0;

      while (count < index) {
        current = current!.next;
        ++count;
      }

      newNode.next = current;
      newNode.prev = current!.prev;
      current!.prev!.next = newNode;
      current!.prev = newNode;
    }

    ++this.size;
  }

  /**
   * 지정된 인덱스의 데이터를 검색합니다.
   * @param {number} index - 검색할 노드의 위치입니다. 0 이상 리스트의 크기 미만이어야 합니다.
   * @returns {T | null} 지정된 인덱스의 데이터 또는 인덱스가 범위를 벗어난 경우 null을 반환합니다.
   * @throws {RangeError} 인덱스가 0보다 작거나 리스트의 크기보다 큰 경우.
   */
  getAt(index: number): T | null {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of bounds');
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current!.next;
      ++count;
    }

    return current!.data;
  }

  /**
   * 지정된 인덱스의 데이터를 업데이트합니다.
   * @param {number} index - 업데이트할 노드의 위치입니다. 0 이상 리스트의 크기 미만이어야 합니다.
   * @param {T} data - 노드의 새 데이터입니다.
   * @throws {RangeError} 인덱스가 0보다 작거나 리스트의 크기보다 큰 경우.
   */
  updateAt(index: number, data: T): void {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of bounds');
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current!.next;
      ++count;
    }

    current!.data = data;
  }

  /**
   * 지정된 인덱스의 노드를 제거합니다.
   * @param {number} index - 제거할 노드의 위치입니다. 0 이상 리스트의 크기 미만이어야 합니다.
   * @throws {RangeError} 인덱스가 0보다 작거나 리스트의 크기보다 큰 경우.
   */
  removeAt(index: number): void {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of bounds');
    }

    let current = this.head;

    if (index === 0) {
      if (this.head!.next) {
        this.head = this.head!.next;
        this.head.prev = null;
      } else {
        this.head = null;
        this.tail = null;
      }
    } else if (index === this.size - 1) {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
    } else {
      let count = 0;

      while (count < index) {
        current = current!.next;
        ++count;
      }

      current!.prev!.next = current!.next;
      current!.next!.prev = current!.prev;
    }

    --this.size;
  }

  /**
   * 주어진 데이터로 새로운 노드를 리스트의 시작 부분에 추가합니다.
   * @param {T} data - 새로운 노드의 데이터입니다.
   */
  prepend(data: T): void {
    this.insertAt(0, data);
  }

  /**
   * 주어진 데이터로 새로운 노드를 리스트의 끝에 추가합니다.
   * @param {T} data - 새로운 노드의 데이터입니다.
   */
  append(data: T): void {
    this.insertAt(this.size, data);
  }

  /**
   * 리스트에 지정된 데이터가 포함되어 있는지 확인합니다.
   * @param {T} data - 검색할 데이터입니다.
   * @returns {boolean} 데이터가 발견되면 true, 그렇지 않으면 false를 반환합니다.
   */
  contains(data: T): boolean {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  /**
   * 지정된 데이터를 가진 첫 번째 노드의 인덱스를 찾습니다.
   * @param {T} data - 검색할 데이터입니다.
   * @returns {number} 노드가 발견되면 인덱스를 반환하고, 그렇지 않으면 -1을 반환합니다.
   */
  find(data: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      ++index;
    }

    return -1;
  }

  /**
   * 리스트를 반전시킵니다.
   * 리스트의 첫 번째 노드가 마지막 노드가 되고, 마지막 노드가 첫 번째 노드가 됩니다.
   */
  reverse(): void {
    let current = this.head;
    let previous = null;

    while (current) {
      previous = current.prev;
      current.prev = current.next;
      current.next = previous;
      current = current.prev;
    }

    if (previous) {
      this.head = previous.prev;
    }
  }

  /**
   * 링크드 리스트를 배열로 변환합니다.
   * @returns {T[]} 링크드 리스트의 모든 요소를 포함하는 배열을 반환합니다.
   */
  toArray(): T[] {
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.data);
      current = current.next;
    }

    return array;
  }

  /**
   * 링크드 리스트가 비어 있는지 확인합니다.
   * @returns {boolean} 리스트가 비어 있으면 true, 그렇지 않으면 false를 반환합니다.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 링크드 리스트의 길이를 반환합니다.
   * @returns {number} 리스트의 요소 수를 반환합니다.
   */
  length(): number {
    return this.size;
  }

  /**
   * 리스트를 지웁니다.
   * 리스트의 모든 노드를 제거하고, 리스트의 크기를 0으로 설정합니다.
   */
  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * 리스트를 콘솔에 출력합니다.
   * 리스트의 각 노드 데이터를 화살표로 연결하여 출력합니다.
   */
  print(): void {
    const array = this.toArray();

    console.log(array.join(' <-> '));
  }
}
