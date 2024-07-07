const {
  DoublyLinkedList,
  Node,
} = require('../../data-structures/linked-list/DoublyLinkedList');

/**
 * 리스트를 역순으로 만듭니다.
 * @param {DoublyLinkedList} list - 역순으로 만들 리스트
 * @returns {DoublyLinkedList} 역순 리스트
 */
function reverseLinkedList(list) {
  let current = list.head;
  let temp = null;

  list.tail = list.head;

  while (current !== null) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev;
  }

  if (temp !== null) {
    list.head = temp.prev;
  }

  return list;
}

/**
 * 리스트의 중간 노드를 반환합니다.
 * @param {DoublyLinkedList} list - 중간 노드를 찾을 리스트
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
 * @param {DoublyLinkedList} list - 노드를 제거할 리스트
 * @param {number} n - 끝에서부터의 인덱스
 * @returns {void}
 */
function removeNthFromEnd(list, n) {
  let dummy = new Node(0);
  dummy.next = list.head;
  list.head.prev = dummy;
  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i <= n; ++i) {
    fast = fast.next;
  }

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  if (slow.next !== null) {
    slow.next.prev = slow;
  } else {
    list.tail = slow;
  }

  list.head = dummy.next;
  list.head.prev = null;
  --list.length;
}

/**
 * 리스트에 루프가 있는지 확인합니다.
 * @param {DoublyLinkedList} list - 루프를 검사할 리스트
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
