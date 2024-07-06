const {
  reverseLinkedList,
  findMiddleNode,
  removeNthFromEnd,
  detectLoop,
  mergeTwoSortedLists,
  deleteNodeWithValue,
  isPalindrome,
} = require('../../../src/algorithms/linked-list/SinglyLinkedList');
const {
  SinglyLinkedList,
  Node,
} = require('../../../src/data-structures/linked-list/SinglyLinkedList');

describe('SinglyLinkedList Algorithms', () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  test('reverseLinkedList(list): 리스트를 역순으로 만들어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    const reversedList = reverseLinkedList(list);
    expect(reversedList.toString()).toBe('3 -> 2 -> 1');
  });
});
