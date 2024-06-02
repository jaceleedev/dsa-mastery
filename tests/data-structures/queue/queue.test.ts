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
});
