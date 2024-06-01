import { Stack } from '../../../src/data-structures/stack/Stack';

describe('스택', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('초기에는 비어있어야 합니다.', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.length()).toBe(0);
  });

  test('요소를 push할 수 있어야 합니다.', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.length()).toBe(3);
    expect(stack.toArray()).toEqual([1, 2, 3]);
  });
});