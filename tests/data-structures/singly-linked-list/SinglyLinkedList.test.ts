import { SinglyLinkedList } from '../../../src/data-structures/linked-lists/singly-linked-list/SinglyLinkedList';

describe('단일 연결 리스트', () => {
  let list: SinglyLinkedList<number>;

  beforeEach(() => {
    list = new SinglyLinkedList<number>();
  });

  test('초기에는 비어있어야 합니다.', () => {
    expect(list.isEmpty()).toBe(true);
    expect(list.length()).toBe(0);
  });
});
