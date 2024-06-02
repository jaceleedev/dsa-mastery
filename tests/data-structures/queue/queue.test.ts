import { Queue } from '../../../src/data-structures/queue/Queue';

describe('큐', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('초기에는 비어있어야 합니다', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length()).toBe(0);
  });

  test('요소를 enqueue할 수 있어야 합니다.', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.length()).toBe(3);
    expect(queue.toArray()).toEqual([1, 2, 3]);
  });

  test('요소를 dequeue할 수 있어야 합니다.', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  test('빈 큐에서 dequeue할 때, 에러가 발생되어야 합니다', () => {
    expect(() => queue.dequeue()).toThrow(Error);
  });

  test('큐의 첫 번째 요소를 확인할 때, 해당 요소가 반환되어야 합니다', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  test('빈 큐에서 peek할 때, 에러가 발생되어야 합니다', () => {
    expect(() => queue.peek()).toThrow(Error);
  });

  test('큐가 배열로 변환되어야 합니다', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toArray()).toEqual([1, 2, 3]);
  });

  test('큐를 비울 수 있어야 합니다', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length()).toBe(0);
  });
});
