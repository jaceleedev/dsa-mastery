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

  prepend(data: T): void {
    this.insertAt(0, data);
  }

  append(data: T): void {
    this.insertAt(this.size, data);
  }

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

  toArray(): T[] {
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.data);
      current = current.next;
    }

    return array;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}
