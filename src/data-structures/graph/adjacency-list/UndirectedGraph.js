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

  /**
   * 두 정점 사이에 간선을 추가합니다.
   * @param {string} vertex1 첫 번째 정점
   * @param {string} vertex2 두 번째 정점
   * @returns {void}
   */
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // 읽기 (Read) 관련 메서드
  // =========================

  /**
   * 그래프에 있는 모든 정점을 반환합니다.
   * @returns {string[]} 모든 정점의 배열
   */
  getVertices() {
    return Object.keys(this.adjacencyList);
  }

  /**
   * 그래프에 있는 모든 간선을 반환합니다.
   * @returns {[string, string][]} 모든 간선의 배열
   */
  getEdges() {
    const edges = [];
    const seen = new Set();

    for (const vertex in this.adjacencyList) {
      for (const neighbor of this.adjacencyList[vertex]) {
        const edge = [vertex, neighbor].sort().toString();

        if (!seen.has(edge)) {
          edges.push([vertex, neighbor]);
          seen.add(edge);
        }
      }
    }

    return edges;
  }

  /**
   * 그래프에 특정 정점이 있는지 확인합니다.
   * @param {string} vertex 확인할 정점
   * @returns {boolean} 정점이 존재하면 true, 그렇지 않으면 false
   */
  containsVertex(vertex) {
    return Boolean(this.adjacencyList[vertex]);
  }

  /**
   * 두 정점 사이에 간선이 있는지 확인합니다.
   * @param {string} vertex1 첫 번째 정점
   * @param {string} vertex2 두 번째 정점
   * @returns {boolean} 간선이 존재하면 true, 그렇지 않으면 false
   */
  containsEdge(vertex1, vertex2) {
    return this.adjacencyList[vertex1]?.includes(vertex2);
  }

  /**
   * 두 정점 사이의 간선을 찾습니다.
   * @param {string} vertex1 첫 번째 정점
   * @param {string} vertex2 두 번째 정점
   * @returns {[string, string] | null} 간선이 존재하면 해당 간선, 그렇지 않으면 null
   */
  findEdge(vertex1, vertex2) {
    if (this.containsEdge(vertex1, vertex2)) {
      return [vertex1, vertex2];
    }

    return null;
  }
}
