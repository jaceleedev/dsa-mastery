class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularSinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * 리스트의 끝에 노드를 추가합니다.
   * 시간 복잡도: O(1)
   * @param {any} data - 추가할 데이터
   */
  append(data) {
    const newNode = new Node(data);

    // 리스트가 비어있는 경우
    if (this.head === null) {
      this.head = newNode;
    }
    // 리스트에 노드가 있는 경우
    else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.tail.next = this.head;

    ++this.size;
  }

  /**
   * 리스트의 시작 부분에 노드를 추가합니다.
   * 시간 복잡도: O(1)
   * @param {any} data - 추가할 데이터
   */
  prepend(data) {
    const newNode = new Node(data);

    // 리스트가 비어있는 경우
    if (this.head === null) {
      this.tail = newNode;
    }
    // 리스트에 노드가 있는 경우
    else {
      newNode.next = this.head;
    }

    this.head = newNode;
    this.tail.next = this.head;

    ++this.size;
  }

  /**
   * 특정 위치의 노드를 제거하고 데이터를 반환합니다.
   * 시간 복잡도: O(n)
   * @param {number} index - 제거할 노드의 위치
   * @returns {any} 제거된 노드의 데이터
   * @throws {RangeError} - 인덱스가 유효한 범위를 벗어날 경우
   */
  removeAt(index) {
    // 인덱스가 유효한 범위 내에 있는지 확인한다.
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of range');
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      ++count;
    }

    const removedData = current.data;

    // 첫 번째 노드를 제거하는 경우
    if (index === 0) {
      this.head = this.head.next;
      this.tail.next = this.head;
    }
    // 그 밖의 노드를 제거하는 경우
    else {
      previous.next = current.next;

      // tail을 제거하는 경우, tail을 업데이트한다.
      if (index === this.size - 1) {
        this.tail = previous;
      }
    }

    // 리스트에 노드가 하나밖에 없는 경우
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }

    --this.size;

    return removedData;
  }
}
