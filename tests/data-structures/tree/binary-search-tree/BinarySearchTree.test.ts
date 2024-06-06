import { BinarySearchTree } from '../../../../src/data-structures/tree/binary-search-tree/BinarySearchTree';

describe('이진 탐색 트리', () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    bst.insert(12);
    bst.insert(18);
  });

  test('요소를 삽입할 수 있어야 합니다', () => {
    expect(bst.inOrderTraversal()).toEqual([3, 5, 7, 10, 12, 15, 18]);
  });

  test('요소를 검색할 수 있어야 합니다', () => {
    expect(bst.search(10)?.value).toBe(10);
    expect(bst.search(5)?.value).toBe(5);
    expect(bst.search(20)).toBe(null);
  });

  test('요소를 삭제할 수 있어야 합니다.', () => {
    bst.delete(10);
    expect(bst.inOrderTraversal()).toEqual([3, 5, 7, 12, 15, 18]);
    bst.delete(3);
    expect(bst.inOrderTraversal()).toEqual([5, 7, 12, 15, 18]);
  });

  test('최소값을 찾을 수 있어야 합니다.', () => {
    expect(bst.findMin()?.value).toBe(3);
  });

  test('최대값을 찾을 수 있어야 합니다.', () => {
    expect(bst.findMax()?.value).toBe(18);
  });

  test('중위 순회를 수행할 수 있어야 합니다', () => {
    expect(bst.inOrderTraversal()).toEqual([3, 5, 7, 10, 12, 15, 18]);
  });

  test('전위 순회를 수행할 수 있어야 합니다', () => {
    expect(bst.preOrderTraversal()).toEqual([10, 5, 3, 7, 15, 12, 18]);
  });

  test('후위 순회를 수행할 수 있어야 합니다', () => {
    expect(bst.postOrderTraversal()).toEqual([3, 7, 5, 12, 18, 15, 10]);
  });

  test('레벨 순회를 수행할 수 있어야 합니다', () => {
    expect(bst.levelOrderTraversal()).toEqual([10, 5, 15, 3, 7, 12, 18]);
  });

  test('높이를 계산할 수 있어야 합니다', () => {
    expect(bst.height()).toBe(3);
    bst.insert(1);
    expect(bst.height()).toBe(4);
  });

  test('노드의 갯수를 셀 수 있어야 합니다', () => {
    expect(bst.countNodes()).toBe(7);
    bst.insert(1);
    expect(bst.countNodes()).toBe(8);
  });

  test('k번째로 작은 요소를 찾을 수 있어야 합니다', () => {
    expect(bst.findKthSmallest(1)).toBe(3);
    expect(bst.findKthSmallest(3)).toBe(7);
    expect(bst.findKthSmallest(5)).toBe(12);
    expect(bst.findKthSmallest(7)).toBe(18);
    expect(bst.findKthSmallest(8)).toBeNull();
  });

  test('가장 가까운 공통 조상을 찾을 수 있어야 합니다', () => {
    expect(bst.findLowestCommonAncestor(3, 7)?.value).toBe(5);
    expect(bst.findLowestCommonAncestor(3, 15)?.value).toBe(10);
    expect(bst.findLowestCommonAncestor(12, 18)?.value).toBe(15);
    expect(bst.findLowestCommonAncestor(3, 100)).toBeNull();
  });
});
