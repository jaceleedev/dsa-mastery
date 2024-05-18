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

  /**
   * 리스트의 끝에 노드를 추가합니다.
   * 시간 복잡도: O(n)
   * @param {any} data - 추가할 데이터
   */
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

  /**
   * 리스트의 시작 부분에 노드를 추가합니다.
   * 시간 복잡도: O(1)
   * @param {any} data - 추가할 데이터
   */
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

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

    if (this.head.data === data) {
      this.head = this.head.next;
      --this.size;

      return data;
    }

    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.data === data) {
        previous.next = current.next;
        --this.size;

        return data;
      }

      previous = current;
      current = current.next;
    }

    return null;
  }

  /**
   * 특정 위치의 노드 데이터를 반환합니다.
   * 시간 복잡도: O(n)
   * @param {number} index - 데이터를 반환할 노드의 위치
   * @returns {any} 노드의 데이터
   */
  getAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      ++count;
    }

    return current.data;
  }

  /**
   * 특정 위치에 노드를 삽입합니다.
   * 시간 복잡도: O(n)
   * @param {number} index - 노드를 삽입할 위치
   * @param {any} data - 삽입할 데이터
   */
  insertAt(index, data) {
    if (index < 0 || index > this.size) {
      return;
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        ++count;
      }

      newNode.next = current;
      previous.next = newNode;
    }

    ++this.size;
  }

  /**
   * 리스트를 비웁니다.
   * 시간 복잡도: O(1)
   */
  clear() {
    this.head = null;
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

  /**
   * 리스트가 비어있는지 확인합니다.
   * 시간 복잡도: O(1)
   * @returns {boolean} 리스트가 비어있으면 true, 그렇지 않으면 false
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * 리스트의 모든 요소를 출력합니다.
   * 시간 복잡도: O(n)
   */
  print() {
    let current = this.head;
    let listString = '';

    while (current !== null) {
      listString += `${current.data} -> `;
      current = current.next;
    }

    console.log(listString + 'null');
  }

  /**
   * 리스트에 특정 데이터가 포함되어 있는지 확인합니다.
   * 시간 복잡도: O(n)
   * @param {any} data - 확인할 데이터
   * @returns {boolean} 데이터가 포함되어 있으면 true, 그렇지 않으면 false
   */
  contains(data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  /**
   * 리스트에서 특정 데이터의 인덱스를 반환합니다.
   * 시간 복잡도: O(n)
   * @param {any} data - 인덱스를 찾을 데이터
   * @returns {number} 데이터의 인덱스 (없으면 -1)
   */
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      ++index;
    }

    return -1;
  }

  /**
   * 리스트에서 특정 데이터의 마지막 인덱스를 반환합니다.
   * 시간 복잡도: O(n)
   * @param {any} data - 마지막 인덱스를 찾을 데이터
   * @returns {number} 데이터의 마지막 인덱스 (없으면 -1)
   */
  lastIndexOf(data) {
    let current = this.head;
    let index = 0;
    let lastIndex = -1;

    while (current !== null) {
      if (current.data === data) {
        lastIndex = index;
      }

      current = current.next;
      ++index;
    }

    return lastIndex;
  }

  /**
   * 리스트를 반대로 뒤집습니다.
   * 시간 복잡도: O(n)
   */
  reverse() {
    let previous = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  /**
   * 리스트를 배열로 변환합니다.
   * 시간 복잡도: O(n)
   * @returns {any[]} 리스트의 요소를 포함하는 배열
   */
  toArray() {
    const array = [];
    let current = this.head;

    while (current !== null) {
      array.push(current.data);
      current = current.next;
    }

    return array;
  }

  /**
   * 리스트를 복사합니다.
   * 시간 복잡도: O(n)
   * @returns {SinglyLinkedList} 복사된 리스트
   */
  clone() {
    const newList = new SinglyLinkedList();
    let current = this.head;

    while (current !== null) {
      newList.append(current.data);
      current = current.next;
    }

    return newList;
  }
}

const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);

list.print(); // 1 -> 2 -> 3 -> null

console.log(list.getAt(1)); // 2

list.insertAt(1, 4);

list.print(); // 1 -> 4 -> 2 -> 3 -> null

console.log(list.removeAt(1)); // 4

list.print(); // 1 -> 2 -> 3 -> null

console.log(list.contains(2)); // true
console.log(list.indexOf(3)); // 2
console.log(list.lastIndexOf(3)); // 2

list.reverse();

list.print(); // 3 -> 2 -> 1 -> null

console.log(list.toArray()); // [3, 2, 1]

const clonedList = list.clone();

clonedList.print(); // 3 -> 2 -> 1 -> null

console.log(list.getSize()); // 3
console.log(list.isEmpty()); // false

list.clear();

console.log(list.isEmpty()); // true

list.print(); // null
