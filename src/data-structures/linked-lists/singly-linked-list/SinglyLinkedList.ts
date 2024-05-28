class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  head: ListNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.size) {
      throw new RangeError('Index out of bounds');
    }

    const newNode = new ListNode(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        current = current!.next;
        previous = current;
        ++count;
      }

      newNode.next = current;
      previous!.next = newNode;
    }

    ++this.size;
  }
}
