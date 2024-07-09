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

/**
 * 스택의 요소들을 오름차순으로 정렬합니다.
 * @param {Stack} stack - 정렬할 스택
 * @returns {Stack} 정렬된 스택
 */
function sortStack(stack) {
  const sortedStack = new Stack();

  while (!stack.isEmpty()) {
    const temp = stack.pop();

    while (!sortedStack.isEmpty() && sortedStack.peek() > temp) {
      stack.push(sortedStack.pop());
    }
    sortedStack.push(temp);
  }

  return sortedStack;
}
