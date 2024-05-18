class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 리스트의 끝에 노드 추가
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }

    ++this.size;
  }

  // 리스트의 시작 부분에 노드 추가
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    ++this.size;
  }

  // 특정 위치의 노드 제거 및 데이터 반환
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removedData = null;

    if (index === 0) {
      removedData = this.head.data;
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        ++count;
      }

      removedData = current.data;
      previous.next = current.next;
    }

    --this.size;

    return removedData;
  }
}
