const {
  reverseLinkedList,
  findMiddleNode,
  removeNthFromEnd,
  detectLoop,
  mergeTwoSortedLists,
  deleteNodeWithValue,
  isPalindrome,
} = require('../../../src/algorithms/linked-list/DoublyLinkedList');
const {
  DoublyLinkedList,
  Node,
} = require('../../../src/data-structures/linked-list/DoublyLinkedList');

describe('DoublyLinkedList Algorithms', () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  test('reverseLinkedList(list): 리스트를 역순으로 만들어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    const reversedList = reverseLinkedList(list);
    expect(reversedList.toString()).toBe('3 <-> 2 <-> 1');
  });
});
