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
});
