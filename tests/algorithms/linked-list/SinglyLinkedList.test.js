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

  test('findMiddleNode(list): 리스트의 중간 노드를 반환해야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    const middleNode = findMiddleNode(list);
    expect(middleNode.value).toBe(3);
  });

  test('removeNthFromEnd(list, n): 리스트의 끝에서부터 n번째 노드를 제거해야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    removeNthFromEnd(list, 2);
    expect(list.toString()).toBe('1 -> 2 -> 3 -> 5');
  });

  test('detectLoop(list): 리스트에 루프가 있는지 확인해야 합니다', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    node1.next = node2;
    node2.next = node3;
    node3.next = node1;
    list.head = node1;
    const hasLoop = detectLoop(list);
    expect(hasLoop).toBe(true);
  });

  test('mergeTwoSortedLists(list1, list2): 두 정렬된 리스트를 병합해야 합니다', () => {
    const list1 = new SinglyLinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    const list2 = new SinglyLinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(6);
    const mergedList = mergeTwoSortedLists(list1, list2);
    expect(mergedList.toString()).toBe('1 -> 2 -> 3 -> 4 -> 5 -> 6');
  });

  test('deleteNodeWithValue(list, value): 리스트에서 특정 값을 가지는 노드를 삭제해야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    deleteNodeWithValue(list, 2);
    expect(list.toString()).toBe('1 -> 3');
  });

  test('isPalindrome(list): 리스트가 팔린드롬인지 확인해야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(2);
    list.append(1);
    const result = isPalindrome(list);
    expect(result).toBe(true);
  });
});
