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
});
