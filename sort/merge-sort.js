/**
 * 병합 정렬 알고리즘으로 숫자 배열을 정렬한다.
 *
 * 시간 복잡도:
 *   최선: O(NlogN) - 배열이 이미 정렬된 경우
 *
 *   평균: O(NlogN) - 배열이 부분적으로 정렬된 경우
 *
 *   최악: O(NlogN) - 배열이 역순으로 정렬된 경우
 *
 * 공간 복잡도: O(N) - 추가적인 배열들을 사용한다.
 *
 * 안정성: Stable (동일한 값이 여러 개 있을 때, 상대적인 순서가 정렬 후에도 유지된다.)
 *
 * @param {number[]} arr - 정렬할 숫자 배열
 * @return {number[]} - 정렬된 숫자 배열
 */
function mergeSort(arr) {
  // 배열의 길이가 1이면, 정렬된 것으로 간주한다.
  if (arr.length <= 1) {
    return arr;
  }

  // 배열을 반으로 나눈다.
  const [left, right] = divide(arr);

  // 반으로 나눈 배열을 각각 정렬 후 합친다.
  // 계속 반씩 나눠지면서 재귀 호출이 일어나기 때문에, O(logN) 시간이 걸린다.
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * 배열을 반으로 나눈다.
 *
 * @param {number[]} arr - 나눌 배열
 * @return {Array} - [left, right] 반으로 나눈 두 개의 배열
 */
function divide(arr) {
  // 배열을 반으로 나누기 위해, 중간 인덱스를 찾는다.
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return [left, right];
}

/**
 * 두 개의 정렬된 배열을 병합하여 하나의 정렬된 배열을 만든다.
 *
 * @param {number[]} left - 정렬된 왼쪽 배열
 * @param {number[]} right - 정렬된 오른쪽 배열
 * @return {number[]} - 병합된 정렬된 배열
 */
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // 왼쪽 배열과 오른쪽 배열을 순회하며 작은 값부터 병합한다.
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      ++leftIndex;
    } else {
      result.push(right[rightIndex]);
      ++rightIndex;
    }
  }

  // 순회 이후에 남은 값들을 추가한다.
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

const example = [1, 5, 7, 4, 2, 3, 6];
console.log(mergeSort(example));
