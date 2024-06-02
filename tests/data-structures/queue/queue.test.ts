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
});
