import { MinHeap } from '../../../../src/data-structures/tree/heap/MinHeap';

describe('최소 힙', () => {
  let minHeap: MinHeap<number>;

  beforeEach(() => {
    minHeap = new MinHeap<number>();
    minHeap.insert(10);
    minHeap.insert(5);
    minHeap.insert(15);
    minHeap.insert(3);
    minHeap.insert(7);
    minHeap.insert(12);
    minHeap.insert(18);
  });

  test('요소를 삽입할 수 있어야 합니다', () => {
    minHeap.insert(1);
    minHeap.insert(20);
    expect(minHeap.toArray()).toEqual([1, 3, 12, 5, 7, 15, 18, 10, 20]);
  });
});
