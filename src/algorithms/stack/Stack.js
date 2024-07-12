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

/**
 * 현재 스택을 복제하여 새로운 스택을 반환합니다.
 * @param {Stack} stack - 복제할 스택
 * @returns {Stack} 복제된 스택
 */
function duplicateStack(stack) {
  const duplicatedStack = new Stack();
  const array = stack.toArray();

  for (let i = array.length - 1; i >= 0; --i) {
    duplicateStack.push(array[i]);
  }

  return duplicatedStack;
}

/**
 * 두 개의 스택을 사용하여 큐 자료구조를 구현합니다.
 * @param {Stack} stack1 - 사용할 스택
 * @param {Stack} stack2 - 사용할 스택
 * @returns {Object} 큐의 enqueue와 dequeue 기능
 */
function stackToQueue(stack1, stack2) {
  return {
    enqueue(value) {
      stack1.push(value);
    },
    dequeue() {
      if (stack2.isEmpty()) {
        while (!stack1.isEmpty()) {
          stack2.push(stack1.pop());
        }
      }

      if (stack2.isEmpty()) {
        throw new Error('큐가 비어있습니다.');
      }

      return stack2.pop();
    },
  };
}

/**
 * 괄호의 균형을 검사합니다.
 * @param {Stack} stack - 사용할 스택
 * @param {string} str - 검사할 문자열
 * @returns {boolean} 균형이 맞으면 true, 그렇지 않으면 false
 */
function balancedParentheses(stack, str) {
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const values = new Set(Object.values(pairs));

  for (const ch of str) {
    if (pairs[ch]) {
      stack.push(ch);
    } else if (values.has(ch)) {
      if (stack.isEmpty() || pairs[stack.pop()] !== ch) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

/**
 * 중위 표기법 수식을 후위 표기법으로 변환합니다.
 * @param {Stack} stack - 사용할 스택
 * @param {string} exp - 중위 표기법 수식
 * @returns {string} 후위 표기법 수식
 */
function infixToPostfix(stack, exp) {
  let postfix = '';
  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3,
  };

  for (const ch of exp) {
    if (/[a-z0-9]/.test(ch)) {
      postfix += ch;
    } else if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      while (!stack.isEmpty() && stack.peek() !== '(') {
        postfix += stack.pop();
      }
      stack.pop();
    } else {
      while (!stack.isEmpty() && precedence[ch] <= precedence[stack.peek()]) {
        postfix += stack.pop();
      }
      stack.push(ch);
    }
  }

  while (!stack.isEmpty()) {
    postfix += stack.pop();
  }

  return postfix;
}

/**
 * 후위 표기법 수식을 계산합니다.
 * @param {Stack} stack - 사용할 스택
 * @param {string} exp - 후위 표기법 수식
 * @returns {number} 계산 결과
 */
function evaluatePostfix(stack, exp) {
  for (const ch of exp) {
    if (/\d/.test(ch)) {
      stack.push(Number(ch));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      switch (ch) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b);
          break;
        case '^':
          stack.push(Math.pow(a, b));
          break;
      }
    }
  }

  return stack.pop();
}

/**
 * 히스토그램에서 가장 큰 직사각형의 면적을 찾습니다.
 * @param {Stack} stack - 사용할 스택
 * @param {number[]} heights - 히스토그램 높이 배열
 * @returns {number} 가장 큰 직사각형의 면적
 */
function largestRectangleInHistogram(stack, heights) {
  let maxArea = 0;
  let index = 0;

  while (index < heights.length) {
    if (stack.isEmpty() || heights[stack.peek()] <= heights[index]) {
      stack.push(index);
      ++index;
    } else {
      const top = stack.pop();
      const area =
        heights[top] * (stack.isEmpty() ? index : index - stack.peek() - 1);

      maxArea = Math.max(maxArea, area);
    }
  }

  while (!stack.isEmpty()) {
    const top = stack.pop();
    const area =
      heights[top] * (stack.isEmpty() ? index : index - stack.peek() - 1);
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}

/**
 * 배열에서 각 요소에 대해 다음으로 큰 요소를 찾습니다.
 * @param {Stack} stack - 사용할 스택
 * @param {number[]} arr - 입력 배열
 * @returns {number[]} 다음으로 큰 요소 배열
 */
function nextGreaterElement(stack, arr) {
  const result = new Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; ++i) {
    while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }

  return result;
}
