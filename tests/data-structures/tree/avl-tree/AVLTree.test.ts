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
});
