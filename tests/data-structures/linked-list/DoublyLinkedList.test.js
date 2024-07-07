const {
  DoublyLinkedList,
} = require('../../../src/data-structures/linked-list/DoublyLinkedList');

describe('DoublyLinkedList', () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  // 생성 (Creation) 관련 메서드
  // =========================

  test('append(value): 리스트 끝에 노드를 추가해야 합니다', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.toString()).toBe('10 <-> 20 <-> 30');
    expect(list.length).toBe(3);
  });

  test('prepend(value): 리스트 시작에 노드를 추가해야 합니다', () => {
    list.prepend(10);
    list.prepend(20);
    list.prepend(30);
    expect(list.toString()).toBe('30 <-> 20 <-> 10');
    expect(list.length).toBe(3);
  });

  test('insertAt(index, value): 특정 인덱스에 노드를 삽입해야 합니다', () => {
    list.append(10);
    list.append(30);
    list.insertAt(1, 20);
    expect(list.toString()).toBe('10 <-> 20 <-> 30');
    expect(list.length).toBe(3);
  });

  test('insertAt(index, value): 범위를 벗어난 인덱스에 대해 예외를 발생시켜야 합니다', () => {
    list.append(10);
    list.append(20);
    expect(() => list.insertAt(-1, 10)).toThrow(
      '인덱스가 리스트의 범위를 벗어났습니다.'
    );
    expect(() => list.insertAt(4, 10)).toThrow(
      '인덱스가 리스트의 범위를 벗어났습니다.'
    );
  });

  // 읽기 (Read) 관련 메서드
  // =====================

  test('getAt(index): 특정 인덱스의 값을 반환해야 합니다', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.getAt(1)).toBe(20);
  });

  test('getAt(index): 범위를 벗어난 인덱스에 대해 예외를 발생시켜야 합니다', () => {
    list.append(10);
    list.append(20);
    expect(() => list.getAt(-1)).toThrow(
      '인덱스가 리스트의 범위를 벗어났습니다.'
    );
    expect(() => list.getAt(5)).toThrow(
      '인덱스가 리스트의 범위를 벗어났습니다.'
    );
  });

  test('toArray(): 리스트의 모든 값을 배열로 반환해야 합니다', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.toArray()).toEqual([10, 20, 30]);
  });

  test('contains(value): 리스트에 특정 값이 있는지 확인해야 합니다', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.contains(20)).toBe(true);
    expect(list.contains(40)).toBe(false);
  });

  // 수정 (Update) 관련 메서드
  // =========================

  test('updateAt(index, value): 특정 인덱스의 값을 업데이트해야 합니다', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    list.updateAt(1, 25);
    expect(list.getAt(1)).toBe(25);
  });

  test('updateAt(index, value): 범위를 벗어난 인덱스에 대해 예외를 발생시켜야 합니다', () => {
    list.append(10);
    list.append(20);
    expect(() => list.updateAt(-1, 10)).toThrow(
      '인덱스가 리스트의 범위를 벗어났습니다.'
    );
    expect(() => list.updateAt(3, 10)).toThrow(
      '인덱스가 리스트의 범위를 벗어났습니다.'
    );
  });

  // 삭제 (Deletion) 관련 메서드
  // =========================

  test('removeAt(index): 특정 인덱스의 노드를 제거해야 합니다', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    list.removeAt(1);
    expect(list.toString()).toBe('10 <-> 30');
    expect(list.length).toBe(2);
  });

  test('removeAt(index): 범위를 벗어난 인덱스에 대해 예외를 발생시켜야 합니다', () => {
    list.append(10);
    list.append(20);
    expect(() => list.removeAt(-1)).toThrow(
      '인덱스가 리스트의 범위를 벗어났습니다.'
    );
    expect(() => list.removeAt(3)).toThrow(
      '인덱스가 리스트의 범위를 벗어났습니다.'
    );
  });

  // 유틸리티 (Utility) 관련 메서드
  // ============================

  test('size(): 리스트의 길이를 반환해야 합니다', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.size()).toBe(3);
  });

  test('isEmpty(): 리스트가 비어 있는지 확인해야 합니다', () => {
    expect(list.isEmpty()).toBe(true);
    list.append(10);
    expect(list.isEmpty()).toBe(false);
  });

  test('toString(): 리스트를 문자열로 반환해야 합니다', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.toString()).toBe('10 <-> 20 <-> 30');
  });

  test('clear(): 리스트를 초기화해야 합니다', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    list.clear();
    expect(list.size()).toBe(0);
    expect(list.isEmpty()).toBe(true);
  });
});
