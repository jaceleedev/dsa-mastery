/**
 * 퀵 정렬 알고리즘으로 숫자 배열을 정렬한다.
 *
 * 시간 복잡도:
 *   최선: O(NlogN) - 배열이 이미 정렬된 경우
 *
 *   평균: O(NlogN) - 배열이 부분적으로 정렬된 경우
 *
 *   최악: O(N^2) - 배열이 역순으로 정렬된 경우
 *
 * 공간 복잡도: O(logN) - 배열 자체의 공간복잡도는 O(1)이다. 재귀 호출로 인한 콜스택 사용으로 O(logN)이 된다.
 *
 * 안정성: Not Stable (동일한 값이 여러 개 있을 때, 상대적인 순서가 정렬 후에도 유지되지 않는다.)
 *
 * @param {number[]} arr - 정렬할 숫자 배열
 * @return {number[]} - 정렬된 숫자 배열
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // 배열 분할 후, 피벗의 인덱스를 얻는다.
    const pi = partition(arr, low, high);

    // 피벗을 기준으로 왼쪽 배열을 재귀적으로 정렬한다.
    quickSort(arr, low, pi - 1);

    // 피벗을 기준으로 오른쪽 배열을 재귀적으로 정렬한다.
    quickSort(arr, pi + 1, high);
  }

  return arr;
}

function partition(arr, low, high) {
  // 피벗을 배열의 마지막 요소로 선택한다.
  const pivot = arr[high];
  // 작은 요소의 끝을 가르킬 인덱스.
  let i = low - 1;

  // 배열의 각 요소를 피벗과 비교한다.
  for (let j = low; j < arr.length; ++j) {
    // 현재 요소가 피벗보다 작다면
    if (arr[j] < pivot) {
      ++i;
      // 요소를 교환하여 작은 요소를 왼쪽으로 이동시킨다.
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // 피벗을 올바른 위치로 이동시킨다.
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  // 피벗의 최종 인덱스를 반환한다.
  return i + 1;
}

const example = [4, 2, 7, 1, 9, 3, 6, 8, 5];
console.log(quickSort(example));
