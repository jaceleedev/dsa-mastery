/**
 * 기수 정렬 알고리즘으로 숫자 배열을 정렬한다.
 *
 * 시간 복잡도:
 *   최선: O(n * k) - 모든 숫자가 동일한 자릿수를 가질 때 (n: 배열의 길이, k: 가장 긴 자릿수)
 *
 *   평균: O(n * k) - 일반적인 경우로, 배열의 숫자들이 다양한 자릿수를 가질 때
 *
 *   최악: O(n * k) - 가장 큰 숫자의 자릿수가 매우 클 때
 *        (예: 배열의 대부분의 숫자가 매우 작은 숫자이지만, 일부 숫자가 매우 큰 자릿수를 가질 때)
 *
 * 공간 복잡도: O(n + k) - 배열의 길이(n)와 자릿수(k)에 비례하는 추가 공간이 필요하다.
 *           (출력 배열과 카운트 배열이 필요)
 *
 * 안정성: Stable (동일한 값이 여러 개 있을 때, 상대적인 순서가 정렬 후에도 유지된다.)
 *
 * @param {number[]} arr - 정렬할 숫자 배열
 * @return {number[]} - 정렬된 숫자 배열
 */
function radixSort(arr) {
  // 배열에서 가장 큰 숫자를 찾는다.
  const max = getMax(arr);

  // 가장 큰 숫자의 자릿수만큼 반복한다.
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    // 현재 자릿수에 대해 카운팅 정렬을 수행한다.
    countingSort(arr, exp);
  }

  return arr;
}

function countingSort(arr, exp) {
  const n = arr.length;
  // 정렬된 결과를 저장할 배열이다.
  const output = new Array(n).fill(0);
  // 각 숫자 (0-9)의 빈도를 저장할 카운트 배열이다.
  const count = new Array(10).fill(0);

  // 카운트 배열에 현재 자릿수의 숫자 빈도를 저장한다.
  for (let i = 0; i < n; ++i) {
    // 현재 자릿수의 숫자를 구한다.
    const index = Math.floor(arr[i] / exp) % 10;
    // 해당 숫자의 빈도를 증가한다.
    ++count[index];
  }

  // 카운트 배열의 누적 합을 구한다.
  // 이유는 각 숫자가 정렬된 배열에서 최종적으로 어디에 위치해야 하는지 알아야 하기 때문이다.
  // 예를 들어, 1의 자리가 8인 숫자가 정렬된 배열에서 몇 번째 위치까지 차지하는지 알고 싶다면,
  // 1의 자리가 8보다 작은 모든 숫자들의 빈도를 합산해야 한다.
  for (let i = 1; i < 10; ++i) {
    count[i] += count[i - 1];
  }

  // 카운트 배열을 역순으로 순회하여, output 배열에 결과를 담는다.
  // 역순으로 순회하는 이유는, 안정성을 유지하기 위함이다.
  for (let i = n - 1; i >= 0; --i) {
    const index = Math.floor(arr[i] / exp) % 10;
    // count[index]는 특정 자릿수 값이 정렬된 배열에서 차지하는 위치를 나타낸다.
    // 그러나 output 배열의 인덱스는 0부터 시작하므로, 올바른 위치를 나타내기 위해
    // count[index] - 1을 사용한다.
    output[count[index] - 1] = arr[i];
    --count[index];
  }

  // 정렬된 결과를 원래 배열로 복사한다.
  for (let i = 0; i < n; ++i) {
    arr[i] = output[i];
  }

  return output;
}

function getMax(arr) {
  return Math.max(...arr);
}

const example = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(example));
