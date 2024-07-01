export class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // 생성 (Creation) 관련 메서드
  // =========================

  /**
   * 그래프에 새로운 정점을 추가합니다.
   * @param {string} vertex 추가할 정점
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
}
