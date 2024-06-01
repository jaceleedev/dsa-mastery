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

  test('요소를 뒤에 추가할 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.length()).toBe(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('요소를 앞에 추가할 수 있어야 합니다', () => {
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    expect(list.length()).toBe(3);
    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  test('지정된 인덱스에 요소를 삽입할 수 있어야 합니다', () => {
    list.append(1);
    list.append(3);
    list.insertAt(1, 2);
    expect(list.length()).toBe(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('지정된 인덱스의 요소를 가져올 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.getAt(1)).toBe(2);
  });

  test('지정된 인덱스의 요소를 업데이트할 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.updateAt(1, 4);
    expect(list.getAt(1)).toBe(4);
  });

  test('지정된 인덱스의 요소를 제거할 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.removeAt(1);
    expect(list.length()).toBe(2);
    expect(list.toArray()).toEqual([1, 3]);
  });
});
