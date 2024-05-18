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

  // 특정 데이터를 찾아 제거
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

  // 특정 위치의 노드 데이터 반환
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

  // 특정 위치에 노드 삽입
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

  // 리스트 비우기
  clear() {
    this.head = null;
    this.size = 0;
  }

  // 리스트의 크기 반환
  getSize() {
    return this.size;
  }

  // 리스트가 비어있는지 확인
  isEmpty() {
    return this.size === 0;
  }

  // 리스트의 모든 요소 출력
  print() {
    let current = this.head;
    let listString = '';

    while (current !== null) {
      listString += `${current.data} -> `;
      current = current.next;
    }

    console.log(listString + 'null');
  }

  // 리스트에 특정 데이터가 포함되어 있는지 확인
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

  // 리스트에서 특정 데이터의 인덱스 반환
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

  // 리스트에서 특정 데이터의 마지막 인덱스 반환
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

  // 리스트를 반대로 뒤집기
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

  // 리스트를 배열로 변환
  toArray() {
    const array = [];
    let current = this.head;

    while (current !== null) {
      array.push(current.data);
      current = current.next;
    }

    return array;
  }

  // 리스트를 복사
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
