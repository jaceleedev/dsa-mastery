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

  test('지정된 인덱스의 요소를 삭제할 수 있어야 합니다', () => {
    minHeap.deleteAt(1);
    expect(minHeap.toArray()).toEqual([3, 7, 12, 10, 18, 15]);
  });

  test('최소값(root)를 제거하고 반환할 수 있어야 합니다', () => {
    expect(minHeap.poll()).toBe(3);
    expect(minHeap.toArray()).toEqual([5, 7, 12, 10, 18, 15]);
    expect(minHeap.poll()).toBe(5);
    expect(minHeap.toArray()).toEqual([7, 10, 12, 15, 18]);
  });

  test('최소값(root)를 제거하지 않고 반환할 수 있어야 합니다', () => {
    expect(minHeap.peek()).toBe(3);
  });

  test('최소값(root)를 새로운 값으로 교체하고 반환할 수 있어야 합니다', () => {
    expect(minHeap.replaceRoot(2)).toBe(3);
    expect(minHeap.toArray()).toEqual([2, 5, 12, 10, 7, 15, 18]);
    expect(minHeap.replaceRoot(20)).toBe(2);
    expect(minHeap.toArray()).toEqual([5, 7, 12, 10, 20, 15, 18]);
  });

  test('힙을 비울 수 있어야 합니다', () => {
    minHeap.clear();
    expect(minHeap.toArray()).toEqual([]);
  });

  test('힙에 특정 요소가 있는지 확인할 수 있어야 합니다', () => {
    expect(minHeap.contains(10)).toBe(true);
    expect(minHeap.contains(20)).toBe(false);
  });

  test('주어진 배열로 힙을 생성할 수 있어야 합니다', () => {
    minHeap.buildHeap([8, 4, 9, 2, 6, 1, 7]);
    expect(minHeap.toArray()).toEqual([1, 2, 7, 4, 6, 9, 8]);
  });

  test('힙의 현재 크기를 반환할 수 있어야 합니다', () => {
    expect(minHeap.size()).toBe(7);
  });

  test('힙 정렬을 수행하여 배열을 오름차순으로 정렬할 수 있어야 합니다', () => {
    const array = [8, 4, 9, 2, 6, 1, 7];
    expect(minHeap.heapSort(array)).toEqual([1, 2, 4, 6, 7, 8, 9]);
  });

  test('힙의 유효성을 검사할 수 있어야 합니다', () => {
    expect(minHeap.isValidHeap()).toBe(true);
    minHeap.heap[0] = 20;
    expect(minHeap.isValidHeap()).toBe(false);
  });

  test('k번째 최소값을 찾을 수 있어야 합니다', () => {
    expect(minHeap.findKthSmallest(1)).toBe(3);
    expect(minHeap.findKthSmallest(3)).toBe(7);
    expect(minHeap.findKthSmallest(5)).toBe(12);
    expect(() => minHeap.findKthSmallest(0)).toThrow('Invalid value of k');
  });

  test('힙의 요소를 레벨 순서로 순회하여 반환할 수 있어야 합니다', () => {
    expect(minHeap.levelOrderTraversal()).toEqual([3, 5, 12, 10, 7, 15, 18]);
  });
});
