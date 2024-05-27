class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
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
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    }
    // 리스트에 노드가 있는 경우
    else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head.prev = newNode;
      this.tail = newNode;
    }

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
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    }
    // 리스트에 노드가 있는 경우
    else {
      newNode.next = this.head;
      newNode.prev = this.tail;
      this.head.prev = newNode;
      this.tail.next = newNode;
      this.head = newNode;
    }

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

    let removedData;

    // 첫 번째 노드를 제거하는 경우
    if (index === 0) {
      removedData = this.head.data;

      // 리스트에 노드가 하나만 있는 경우
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = this.tail;
        this.tail.next = this.head;
      }
    }
    // 마지막 노드를 제거하는 경우
    else if (index === this.size - 1) {
      removedData = this.tail.data;

      this.tail = this.tail.prev;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    } else {
      let current = this.head;
      let count = 0;

      while (count < index) {
        current = current.next;
        ++count;
      }

      removedData = current.data;

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    --this.size;

    return removedData;
  }

  /**
   * 특정 데이터를 찾아 제거합니다.
   * 시간 복잡도: O(n)
   * @param {any} data - 제거할 데이터
   * @returns {any} 제거된 데이터
   */
  remove(data) {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    let nodesChecked = 0;

    // 원형이므로, 한 바퀴만 돌아서 탐색한다.
    while (nodesChecked < this.size) {
      // 현재 노드의 데이터와 제거할 데이터가 일치하는 경우
      if (current.data === data) {
        // 현재 노드가 head인 경우
        if (current === this.head) {
          // 리스트에 하나의 노드만 있는 경우
          if (this.size === 1) {
            this.head = null;
            this.tail = null;
          } else {
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
          }
        }
        // 현재 노드가 tail인 경우
        else if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = this.head;
          this.head.prev = this.tail;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        --this.size;

        return data;
      }

      current = current.next;
      ++nodesChecked;
    }

    return null;
  }

  /**
   * 특정 위치의 노드 데이터를 반환합니다.
   * 시간 복잡도: O(n)
   * @param {number} index - 데이터를 반환할 노드의 위치
   * @returns {any} 노드의 데이터
   * @throws {RangeError} - 인덱스가 유효한 범위를 벗어날 경우
   */
  getAt(index) {
    // 인덱스가 유효한 범위 내에 있는지 확인한다.
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of range');
    }

    let current;
    let count;

    // 인덱스가 리스트 길이의 중간보다 앞에 있는 경우
    if (index < this.size / 2) {
      current = this.head;
      count = 0;

      while (count < index) {
        current = current.next;
        ++count;
      }
    }
    // 인덱스가 리스트 길이의 중간보다 뒤에 있는 경우
    else {
      current = this.tail;
      count = this.size - 1;

      while (count > index) {
        current = current.prev;
        --count;
      }
    }

    return current.data;
  }

  /**
   * 특정 위치에 노드를 삽입합니다.
   * 시간 복잡도: O(n)
   * @param {number} index - 노드를 삽입할 위치
   * @param {any} data - 삽입할 데이터
   * @throws {RangeError} - 인덱스가 유효한 범위를 벗어날 경우
   */
  insertAt(index, data) {
    // 인덱스가 유효한 범위 내에 있는지 확인한다.
    if (index < 0 || index > this.size) {
      throw new RangeError('Index out of range');
    }

    const newNode = new Node(data);

    if (index === 0) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = newNode;
        newNode.prev = newNode;
      } else {
        newNode.next = this.head;
        newNode.prev = this.tail;
        this.head.prev = newNode;
        this.tail.next = newNode;
        this.head = newNode;
      }
    } else if (index === this.size) {
      newNode.next = this.head;
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.head.prev = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let count = 0;

      while (count < index) {
        current = current.next;
        ++count;
      }

      newNode.next = current;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.prev = newNode;
    }

    ++this.size;
  }

  /**
   * 리스트를 비웁니다.
   * 시간 복잡도: O(1)
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * 리스트의 크기를 반환합니다.
   * 시간 복잡도: O(1)
   * @returns {number} 리스트의 크기
   */
  getSize() {
    return this.size;
  }
}
