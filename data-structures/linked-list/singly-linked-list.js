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
}
