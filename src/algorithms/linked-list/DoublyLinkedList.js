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
