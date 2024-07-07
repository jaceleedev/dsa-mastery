class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 생성 (Creation) 관련 메서드
  // =========================

  /**
   * 리스트의 끝에 노드를 추가합니다.
   * @param {*} value - 추가할 값
   * @returns {void}
   */
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    ++this.length;
  }

  /**
   * 리스트의 시작에 노드를 추가합니다.
   * @param {*} value - 추가할 값
   * @returns {void}
   */
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    ++this.length;
  }

  /**
   * 특정 인덱스에 노드를 삽입합니다.
   * @param {number} index - 노드를 삽입할 위치
   * @param {*} value - 삽입할 값
   * @throws {RangeError} 인덱스가 범위를 벗어날 경우
   * @returns {void}
   */
  insertAt(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('인덱스가 리스트의 범위를 벗어났습니다.');
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      current = current.next;
      ++currentIndex;
    }

    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;

    ++this.length;
  }

  // 읽기 (Read) 관련 메서드
  // =====================

  /**
   * 특정 인덱스에 있는 노드의 값을 반환합니다.
   * @param {number} index - 값을 반환할 노드의 위치
   * @throws {RangeError} 인덱스가 범위를 벗어날 경우
   * @returns {*} 인덱스에 해당하는 노드의 값
   */
  getAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('인덱스가 리스트의 범위를 벗어났습니다.');
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      current = current.next;
      ++currentIndex;
    }

    return current.value;
  }

  /**
   * 리스트의 모든 값을 배열로 반환합니다.
   * @returns {*[]} 모든 값의 배열
   */
  toArray() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  /**
   * 리스트에 특정 값이 있는지 확인합니다.
   * @param {*} value - 확인할 값
   * @returns {boolean} 값이 존재하면 true, 그렇지 않으면 false
   */
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // 수정 (Update) 관련 메서드
  // =========================

  /**
   * 특정 인덱스에 있는 노드의 값을 업데이트합니다.
   * @param {number} index - 값을 업데이트할 노드의 위치
   * @param {*} value - 새로운 값
   * @throws {RangeError} 인덱스가 범위를 벗어날 경우
   * @returns {void}
   */
  updateAt(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('인덱스가 리스트의 범위를 벗어났습니다.');
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      current = current.next;
      ++currentIndex;
    }

    current.value = value;
  }

  // 삭제 (Deletion) 관련 메서드
  // =========================

  /**
   * 특정 인덱스에 있는 노드를 제거합니다.
   * @param {number} index - 제거할 노드의 위치
   * @throws {RangeError} 인덱스가 범위를 벗어날 경우
   * @returns {void}
   */
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('인덱스가 리스트의 범위를 벗어났습니다.');
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else {
      let currentIndex = 0;

      while (currentIndex < index) {
        current = current.next;
        ++currentIndex;
      }

      current.prev.next = current.next;

      if (current.next) {
        current.next.prev = current.prev;
      } else {
        this.tail = current.prev;
      }
    }

    --this.length;
  }

  // 유틸리티 (Utility) 관련 메서드
  // ============================

  /**
   * 리스트의 길이를 반환합니다.
   * @returns {number} 리스트의 길이
   */
  size() {
    return this.length;
  }

  /**
   * 리스트가 비어 있는지 확인합니다.
   * @returns {boolean} 비어 있으면 true, 그렇지 않으면 false
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * 리스트를 문자열로 반환합니다.
   * @returns {string} 리스트의 문자열 표현
   */
  toString() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values.join(' <-> ');
  }

  /**
   * 리스트를 초기화합니다.
   * @returns {void}
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

module.exports = { DoublyLinkedList, Node };
