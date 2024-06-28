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

  test('지정된 인덱스의 요소를 업데이트 할 수 있어야 합니다', () => {
    minHeap.updateAt(2, 1);
    expect(minHeap.toArray()).toEqual([1, 5, 3, 10, 7, 15, 18]);
    minHeap.updateAt(0, 20);
    expect(minHeap.toArray()).toEqual([3, 5, 15, 10, 7, 20, 18]);
  });
});
