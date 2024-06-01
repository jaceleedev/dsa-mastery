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
});
