const Stack = require('../../../src/data-structures/stack/Stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  // 생성 (Creation) 관련 메서드
  // =========================

  test('push(value): 스택에 값을 추가해야 합니다', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.toArray()).toEqual([10, 20, 30]);
    expect(stack.size()).toBe(3);
  });

  // 읽기 (Read) 관련 메서드
  // =====================

  test('peek(): 스택의 가장 위에 있는 값을 반환해야 합니다', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
  });

  test('peek(): 스택이 비어있을 때 예외를 발생시켜야 합니다', () => {
    expect(() => stack.peek()).toThrow('스택이 비어있습니다.');
  });

  test('toArray(): 스택의 모든 값을 배열로 반환해야 합니다', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.toArray()).toEqual([10, 20, 30]);
  });

  // 삭제 (Deletion) 관련 메서드
  // =========================

  test('pop(): 스택에서 가장 위에 있는 값을 제거하고 반환해야 합니다', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.toArray()).toEqual([10]);
  });

  test('pop(): 스택이 비어있을 때 예외를 발생시켜야 합니다', () => {
    expect(() => stack.pop()).toThrow('스택이 비어있습니다.');
  });

  // 유틸리티 (Utility) 관련 메서드
  // ============================

  test('size(): 스택의 크기를 반환해야 합니다', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.size()).toBe(2);
  });

  test('isEmpty(): 스택이 비어 있는지 확인해야 합니다', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
  });

  test('toString(): 스택을 문자열로 반환해야 합니다', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.toString()).toBe('30 \n↑\n 20 \n↑\n 10');
  });

  test('clear(): 스택을 초기화해야 합니다', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});
