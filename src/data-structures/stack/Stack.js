class Stack {
  constructor() {
    this.items = [];
  }

  // 생성 (Creation) 관련 메서드
  // =========================

  /**
   * 스택에 값을 추가합니다.
   * @param {*} value - 추가할 값
   * @returns {void}
   */
  push(value) {
    this.items.push(value);
  }

  // 읽기 (Read) 관련 메서드
  // =====================

  /**
   * 스택의 가장 위에 있는 값을 제거하지 않고 반환합니다.
   * @throws {Error} 스택이 비어있을 때
   * @returns {*} 스택의 가장 위에 있는 값
   */
  peek() {
    if (this.isEmpty()) {
      throw new Error('스택이 비어있습니다.');
    }
    return this.items[this.items.length - 1];
  }

  /**
   * 스택의 모든 값을 배열로 반환합니다.
   * @returns {*[]} 모든 값의 배열
   */
  toArray() {
    return [...this.items];
  }

  // 삭제 (Deletion) 관련 메서드
  // =========================

  /**
   * 스택에서 가장 위에 있는 값을 제거하고 반환합니다.
   * @throws {Error} 스택이 비어있을 때
   * @returns {*} 스택의 가장 위에 있는 값
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error('스택이 비어있습니다.');
    }
    return this.items.pop();
  }

  // 유틸리티 (Utility) 관련 메서드
  // ============================

  /**
   * 스택의 크기를 반환합니다.
   * @returns {number} 스택의 크기
   */
  size() {
    return this.items.length;
  }

  /**
   * 스택이 비어 있는지 확인합니다.
   * @returns {boolean} 비어 있으면 true, 그렇지 않으면 false
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 스택을 문자열로 반환합니다.
   * @returns {string} 스택의 문자열 표현
   */
  toString() {
    return this.toArray().reverse().join(' \n↑\n ');
  }

  /**
   * 스택을 초기화합니다.
   * @returns {void}
   */
  clear() {
    this.items = [];
  }
}

module.exports = Stack;
