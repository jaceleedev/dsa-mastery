import { DoublyLinkedList } from '../../../../src/data-structures/linked-lists/doubly-linked-list/DoublyLinkedList';

describe('이중 연결 리스트', () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
  });

  test('초기에는 비어있어야 합니다.', () => {
    expect(list.isEmpty()).toBe(true);
    expect(list.length()).toBe(0);
  });
});
