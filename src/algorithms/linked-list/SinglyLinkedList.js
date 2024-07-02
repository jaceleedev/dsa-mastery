const SinglyLinkedList = require('../../data-structures/linked-list/SinglyLinkedList');

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
 * 리스트의 중간 노드 값을 반환합니다.
 * @param {SinglyLinkedList} list - 중간 노드를 찾을 리스트
 * @returns {Node} 중간 노드 값
 */
function findMiddleNode(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}
