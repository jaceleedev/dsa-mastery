import { MaxHeap } from '../../../../src/data-structures/tree/heap/MaxHeap';

describe('최대 힙', () => {
  let maxHeap = new MaxHeap<number>();

  beforeEach(() => {
    maxHeap = new MaxHeap<number>();
    maxHeap.insert(10);
    maxHeap.insert(5);
    maxHeap.insert(15);
    maxHeap.insert(3);
    maxHeap.insert(7);
    maxHeap.insert(12);
    maxHeap.insert(18);
  });

  test('요소를 삽입할 수 있어야 합니다', () => {
    maxHeap.insert(20);
    maxHeap.insert(1);
    expect(maxHeap.toArray()).toEqual([20, 18, 15, 7, 5, 10, 12, 3, 1]);
  });
});
