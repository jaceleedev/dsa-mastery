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
