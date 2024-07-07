const {
  SinglyLinkedList,
  Node,
} = require('../../data-structures/linked-list/SinglyLinkedList');

/**
 * 리스트를 역순으로 만듭니다.
 * @param {SinglyLinkedList} list - 역순으로 만들 리스트
 * @returns {SinglyLinkedList} 역순 리스트
 */
function reverseLinkedList(list) {
  let previous = null;
  let current = list.head;
  let next = current.next;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  list.head = previous;

  return list;
}

/**
 * 리스트의 중간 노드를 반환합니다.
 * @param {SinglyLinkedList} list - 중간 노드를 찾을 리스트
 * @returns {Node} 중간 노드
 */
function findMiddleNode(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

/**
 * 리스트의 끝에서부터 n번째 노드를 제거합니다.
 * @param {SinglyLinkedList} list - 노드를 제거할 리스트
 * @param {number} n - 끝에서부터의 인덱스
 * @returns {void}
 */
function removeNthFromEnd(list, n) {
  let dummy = new Node(0);
  dummy.next = list.head;
  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i <= n; ++i) {
    fast = fast.next;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  list.head = dummy.next;
  --this.length;
}

/**
 * 리스트에 루프가 있는지 확인합니다.
 * @param {SinglyLinkedList} list - 루프를 검사할 리스트
 * @returns {boolean} 루프가 있으면 true, 없으면 false
 */
function detectLoop(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

/**
 * 두 정렬된 리스트를 병합합니다.
 * @param {SinglyLinkedList} list1 - 첫 번째 리스트
 * @param {SinglyLinkedList} list2 - 두 번째 리스트
 * @returns {SinglyLinkedList} 병합된 리스트
 */
function mergeTwoSortedLists(list1, list2) {
  const mergedList = new SinglyLinkedList();
  let current1 = list1.head;
  let current2 = list2.head;
  let mergedCurrent = null;

  while (current1 !== null && current2 !== null) {
    let value;

    if (current1.value < current2.value) {
      value = current1.value;
      current1 = current1.next;
    } else {
      value = current2.value;
      current2 = current2.next;
    }

    if (mergedList.head === null) {
      mergedList.head = new Node(value);
      mergedCurrent = mergedList.head;
    } else {
      mergedCurrent.next = new Node(value);
      mergedCurrent = mergedCurrent.next;
    }

    ++mergedList.length;
  }

  while (current1 !== null) {
    mergedCurrent.next = new Node(current1.value);
    mergedCurrent = mergedCurrent.next;
    current1 = current1.next;
    ++mergedList.length;
  }

  while (current2 !== null) {
    mergedCurrent.next = new Node(current2.value);
    mergedCurrent = mergedCurrent.next;
    current2 = current2.next;
    ++mergedList.length;
  }

  return mergedList;
}

/**
 * 리스트에서 특정 값을 가지는 노드를 삭제합니다.
 * @param {SinglyLinkedList} list - 값을 가지는 노드를 삭제할 리스트
 * @param {*} value - 삭제할 값
 * @returns {void}
 */
function deleteNodeWithValue(list, value) {
  let current = list.head;
  let previous = null;

  while (current !== null) {
    if (current.value === value) {
      if (previous === null) {
        list.head = current.next;
      } else {
        previous.next = current.next;
      }

      --list.length;

      return;
    }

    previous = current;
    current = current.next;
  }
}

/**
 * 리스트가 팔린드롬인지 확인합니다.
 * @param {SinglyLinkedList} list - 팔린드롬을 확인할 리스트
 * @returns {boolean} 팔린드롬이면 true, 아니면 false
 */
function isPalindrome(list) {
  let slow = list.head;
  let fast = list.head;
  const stack = [];

  while (fast !== null && fast.next !== null) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast !== null) {
    slow = slow.next;
  }

  while (slow !== null) {
    const value = stack.pop();

    if (value !== slow.value) {
      return false;
    }

    slow = slow.next;
  }

  return true;
}

module.exports = {
  reverseLinkedList,
  findMiddleNode,
  removeNthFromEnd,
  detectLoop,
  mergeTwoSortedLists,
  deleteNodeWithValue,
  isPalindrome,
};
