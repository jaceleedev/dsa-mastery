class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
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

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    ++this.size;
  }

  /**
   * 특정 위치의 노드를 제거하고 데이터를 반환합니다.
   * 시간 복잡도: O(n)
   * @param {number} index - 제거할 노드의 위치
   * @returns {any} 제거된 노드의 데이터
   */
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    let removedData;

    if (index === 0) {
      removedData = this.head.data;
      this.head = this.head.next;

      if (this.head === null) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    } else if (index === this.size - 1) {
      removedData = this.tail.data;

      this.tail = this.tail.prev;
      this.tail.next = null;
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
}
