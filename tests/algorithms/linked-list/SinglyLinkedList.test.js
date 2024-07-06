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

  test('findMiddleNode(list): 리스트의 중간 노드 값을 반환해야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    const middleNodeValue = findMiddleNode(list);
    expect(middleNodeValue).toBe(3);
  });
});
