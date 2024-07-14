const UndirectedGraph = require('../../../../src/data-structures/graph/adjacency-list/UndirectedGraph');

describe('UndirectedGraph (adjacencyList)', () => {
  let graph;

  beforeEach(() => {
    graph = new UndirectedGraph();
  });

  // 생성 (Creation) 관련 메서드
  // =========================

  test('addVertex(vertex): 그래프에 새로운 정점을 추가해야 합니다', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.containsVertex('A')).toBe(true);
    expect(graph.containsVertex('B')).toBe(true);
    expect(graph.getVertices()).toEqual(['A', 'B']);
  });

  test('addEdge(vertex1, vertex2): 두 정점 사이에 간선을 추가해야 합니다', () => {
    graph.addEdge('A', 'B');
    expect(graph.containsEdge('A', 'B')).toBe(true);
    expect(graph.containsEdge('B', 'A')).toBe(true);
  });

  // 읽기 (Read) 관련 메서드
  // =========================

  test('getVertices(): 그래프에 있는 모든 정점을 반환해야 합니다', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.getVertices()).toEqual(['A', 'B']);
  });

  test('getEdges(): 그래프에 있는 모든 간선을 반환해야 합니다', () => {
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    expect(graph.getEdges()).toEqual([
      ['A', 'B'],
      ['B', 'C'],
    ]);
  });
});
