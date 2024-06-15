import { AVLTree } from '../../../../src/data-structures/tree/avl-tree/AVLTree';

describe('AVL 트리', () => {
  let avl: AVLTree<number>;

  beforeEach(() => {
    avl = new AVLTree<number>();
    avl.insert(10);
    avl.insert(5);
    avl.insert(15);
    avl.insert(3);
    avl.insert(7);
    avl.insert(12);
    avl.insert(18);
  });

  test('요소를 삽입할 수 있어야 합니다', () => {
    expect(avl.inOrderTraversal()).toEqual([3, 5, 7, 10, 12, 15, 18]);
  });

  test('요소를 검색할 수 있어야 합니다', () => {
    expect(avl.search(10)?.value).toBe(10);
    expect(avl.search(5)?.value).toBe(5);
    expect(avl.search(20)).toBe(null);
  });

  test('요소를 삭제할 수 있어야 합니다.', () => {
    avl.delete(10);
    expect(avl.inOrderTraversal()).toEqual([3, 5, 7, 12, 15, 18]);
    avl.delete(3);
    expect(avl.inOrderTraversal()).toEqual([5, 7, 12, 15, 18]);
  });

  test('최소값을 찾을 수 있어야 합니다.', () => {
    expect(avl.findMin()?.value).toBe(3);
  });

  test('최대값을 찾을 수 있어야 합니다.', () => {
    expect(avl.findMax()?.value).toBe(18);
  });

  test('중위 순회를 수행할 수 있어야 합니다', () => {
    expect(avl.inOrderTraversal()).toEqual([3, 5, 7, 10, 12, 15, 18]);
  });

  test('전위 순회를 수행할 수 있어야 합니다', () => {
    expect(avl.preOrderTraversal()).toEqual([10, 5, 3, 7, 15, 12, 18]);
  });

  test('후위 순회를 수행할 수 있어야 합니다', () => {
    expect(avl.postOrderTraversal()).toEqual([3, 7, 5, 12, 18, 15, 10]);
  });

  test('레벨 순회를 수행할 수 있어야 합니다', () => {
    expect(avl.levelOrderTraversal()).toEqual([10, 5, 15, 3, 7, 12, 18]);
  });

  test('높이를 계산할 수 있어야 합니다', () => {
    expect(avl.height()).toBe(3);
    avl.insert(1);
    expect(avl.height()).toBe(4);
  });

  test('노드의 갯수를 셀 수 있어야 합니다', () => {
    expect(avl.countNodes()).toBe(7);
    avl.insert(1);
    expect(avl.countNodes()).toBe(8);
  });

  test('k번째로 작은 요소를 찾을 수 있어야 합니다', () => {
    expect(avl.findKthSmallest(1)).toBe(3);
    expect(avl.findKthSmallest(3)).toBe(7);
    expect(avl.findKthSmallest(5)).toBe(12);
    expect(avl.findKthSmallest(7)).toBe(18);
    expect(avl.findKthSmallest(8)).toBeNull();
  });

  test('가장 가까운 공통 조상을 찾을 수 있어야 합니다', () => {
    expect(avl.findLowestCommonAncestor(3, 7)?.value).toBe(5);
    expect(avl.findLowestCommonAncestor(3, 15)?.value).toBe(10);
    expect(avl.findLowestCommonAncestor(12, 18)?.value).toBe(15);
    expect(avl.findLowestCommonAncestor(3, 100)).toBeNull();
  });

  test('Left-Left 케이스에서, Right 회전을 해야 합니다.', () => {
    const avlLL = new AVLTree<number>();
    avlLL.insert(30);
    avlLL.insert(20);
    avlLL.insert(10);
    expect(avlLL.inOrderTraversal()).toEqual([10, 20, 30]);
    expect(avlLL.levelOrderTraversal()).toEqual([20, 10, 30]);
  });

  test('Right-Right 케이스에서, Left 회전을 해야 합니다.', () => {
    const avlLL = new AVLTree<number>();
    avlLL.insert(10);
    avlLL.insert(20);
    avlLL.insert(30);
    expect(avlLL.inOrderTraversal()).toEqual([10, 20, 30]);
    expect(avlLL.levelOrderTraversal()).toEqual([20, 10, 30]);
  });

  test('Left-Right 케이스에서, Left-Right 회전을 해야 합니다', () => {
    const avlLL = new AVLTree<number>();
    avlLL.insert(30);
    avlLL.insert(10);
    avlLL.insert(20);
    expect(avlLL.inOrderTraversal()).toEqual([10, 20, 30]);
    expect(avlLL.levelOrderTraversal()).toEqual([20, 10, 30]);
  });

  test('Right-Left 케이스에서, Right-Left 회전을 해야 합니다', () => {
    const avlLL = new AVLTree<number>();
    avlLL.insert(10);
    avlLL.insert(30);
    avlLL.insert(20);
    expect(avlLL.inOrderTraversal()).toEqual([10, 20, 30]);
    expect(avlLL.levelOrderTraversal()).toEqual([20, 10, 30]);
  });
});
