class UndirectedGraph {
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
   * 특정 정점의 이웃 정점을 가져옵니다.
   * @param {string} vertex 이웃 정점을 가져올 정점
   * @returns {string[]} 이웃 정점의 배열
   */
  getNeighbors(vertex) {
    return this.adjacencyList[vertex];
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
    return this.adjacencyList && this.adjacencyList[vertex1].includes(vertex2);
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

  /**
   * 특정 정점의 차수를 가져옵니다.
   * @param {string} vertex 차수를 가져올 정점
   * @returns {number} 정점의 차수
   */
  degree(vertex) {
    return this.adjacencyList[vertex]?.length || 0;
  }

  // 삭제 (Deletion) 관련 메서드
  // ===========================

  /**
   * 그래프에서 정점과 해당 정점에 연결된 모든 간선을 제거합니다.
   * @param {string} vertex 제거할 정점
   * @returns {void}
   */
  removeVertex(vertex) {
    while (this.adjacencyList[vertex]?.length) {
      const neighbor = this.adjacencyList[vertex].pop();

      if (neighbor) {
        this.removeEdge(vertex, neighbor);
      }
    }

    delete this.adjacencyList[vertex];
  }

  /**
   * 두 정점 사이의 간선을 제거합니다.
   * @param {string} vertex1 첫 번째 정점
   * @param {string} vertex2 두 번째 정점
   * @returns {void}
   */
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (neighbor) => neighbor !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (neighbor) => neighbor !== vertex1
    );
  }

  // 유틸리티 (Utility) 관련 메서드
  // ============================

  /**
   * 깊이 우선 탐색(DFS)을 재귀적으로 수행합니다.
   * @param {string} start 시작 정점
   * @returns {string[]} 방문한 정점의 배열
   */
  depthFirstSearchRecursive(start) {
    const result = [];
    const visited = {};

    const dfs = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    };

    dfs(start);

    return result;
  }

  /**
   * 깊이 우선 탐색(DFS)을 비재귀적으로 수행합니다.
   * @param {string} start 시작 정점
   * @returns {string[]} 방문한 정점의 배열
   */
  depthFirstSearchIterative(start) {
    const result = [];
    const visited = {};
    const stack = [start];
    visited[start] = true;

    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  /**
   * 너비 우선 탐색(BFS)을 비재귀적으로 수행합니다.
   * @param {string} start 시작 정점
   * @returns {string[]} 방문한 정점의 배열
   */
  breadthFirstSearchIterative(start) {
    const result = [];
    const visited = {};
    const queue = [start];
    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  /**
   * 그래프에 사이클이 있는지 확인합니다.
   * @returns {boolean} 사이클이 있으면 true, 그렇지 않으면 false
   */
  hasCycle() {
    const visited = new Set();

    const dfs = (vertex, parent) => {
      visited.add(vertex);

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor, vertex)) {
            return true;
          }
        } else if (neighbor !== parent) {
          return true;
        }
      }

      return false;
    };

    for (const vertex in this.adjacencyList) {
      if (!visited.has(vertex)) {
        if (dfs(vertex, null)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * 두 정점 사이의 최단 경로를 찾습니다.
   * @param {string} start 시작 정점
   * @param {string} end 끝 정점
   * @returns {string[] | null} 최단 경로에 있는 정점의 배열, 경로가 없으면 null
   */
  shortestPath(start, end) {
    const visited = {};
    const queue = [start];
    visited[start] = true;
    const previous = {};

    while (queue.length) {
      const vertex = queue.shift();

      if (vertex === end) {
        const path = [];
        let current = end;

        while (current) {
          path.unshift(current);
          current = previous[current];
        }

        return path;
      }

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          previous[neighbor] = vertex;
          queue.push(neighbor);
        }
      });
    }

    return null;
  }

  /**
   * 그래프가 연결 그래프인지 확인합니다.
   * @returns {boolean} 그래프가 연결 그래프이면 true, 그렇지 않으면 false
   */
  isConnected() {
    const visited = new Set();

    const dfs = (vertex) => {
      visited.add(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      });
    };

    const vertices = this.getVertices();

    if (vertices.length === 0) {
      return true;
    }

    dfs(vertices[0]);

    return visited.size === vertices.length;
  }

  /**
   * 그래프를 초기화합니다.
   * @returns {void}
   */
  clear() {
    this.adjacencyList = {};
  }

  /**
   * 그래프가 비어있는지 확인합니다.
   * @returns {boolean} 그래프가 비어있으면 true, 그렇지 않으면 false
   */
  isEmpty() {
    return Object.keys(this.adjacencyList).length === 0;
  }

  /**
   * 그래프의 크기(정점 수와 간선 수)를 가져옵니다.
   * @returns {{ vertices: number; edges: number }} 정점 수와 간선 수를 포함한 객체
   */
  size() {
    const vertices = this.getVertices().length;
    const edges = this.getEdges().length;

    return { vertices, edges };
  }

  /**
   * 그래프를 문자열로 변환합니다.
   * @returns {string} 그래프의 문자열 표현
   */
  toString() {
    let result = '';

    for (const vertex in this.adjacencyList) {
      result += `${vertex}: ${this.adjacencyList[vertex].join(', ')}\n`;
    }

    return result;
  }
}

module.exports = UndirectedGraph;
