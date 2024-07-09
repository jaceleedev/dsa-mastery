const Stack = require('../../data-structures/stack/Stack');

/**
 * 스택을 역순으로 만듭니다.
 * @param {Stack} stack - 역순으로 만들 스택
 * @returns {Stack} 역순 스택
 */
function reverseStack(stack) {
  const reversedStack = new Stack();

  while (!stack.isEmpty()) {
    reversedStack.push(stack.pop());
  }

  return reversedStack;
}
