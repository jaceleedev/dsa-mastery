/**
 * 스택 자료구조를 class를 사용해 구현할 수 있다.
 *
 * 시간 복잡도:
 *   push: O(1) - 요소를 스택의 맨 위에 추가한다.
 *
 *   pop: O(1) - 요소를 스택의 맨 위에서 제거한다.
 *
 *   peek: O(1) - 스택의 맨 위 요소를 조회한다.
 *
 *   isEmpty: O(1) - 스택이 비어있는지 확인한다.
 *
 *   size: O(1) - 스택의 크기를 반환한다.
 *
 *   clear: O(1) - 스택의 모든 요소를 제거한다.
 *
 * 공간 복잡도:
 *   O(N) - N개의 요소를 저장할 수 있는 배열을 사용한다.
 */
class Stack {
  constructor() {
    this.items = [];
  }

  // 스택에 요소 추가
  push(element) {
    this.items.push(element);
  }

  // 스택에서 요소 제거 및 반환
  pop() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }

    return this.items.pop();
  }

  // 스택의 맨 위 요소 반환 (제거하지 않음)
  peek() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }

    return this.items[this.items.length - 1];
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택의 크기 반환
  size() {
    return this.items.length;
  }

  // 스택의 모든 요소 제거
  clear() {
    this.items = [];
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
stack.clear();
console.log(stack.isEmpty()); // true
