/**
 * 삽입 정렬 알고리즘으로 숫자 배열을 정렬한다.
 *
 * 시간 복잡도:
 *   최선: O(N) - 배열이 이미 정렬된 경우
 *
 *   평균: O(N^2) - 배열이 부분적으로 정렬된 경우
 *
 *   최악: O(N^2) - 배열이 역순으로 정렬된 경우
 *
 * 공간 복잡도: O(1) - 추가적인 배열을 사용하지 않는다.
 *
 * 안정성: O (동일한 값이 여러 개 있을 때, 상대적인 순서가 정렬 후에도 유지된다.)
 *
 * @param {number[]} arr - 정렬할 숫자 배열
 * @return {number[]} - 정렬된 숫자 배열
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    // 현재 삽입할 숫자롤 저장한다.
    let current = arr[i];
    let j = i - 1;

    // 왼쪽의 요소가 오른쪽보다 크다면
    while (j >= 0 && arr[j] > current) {
      // 왼쪽의 요소를 오른쪽 위치로 옮긴다.
      arr[j + 1] = arr[j];
      --j;
    }

    // 현재 숫자를 올바른 위치에 넣는다.
    arr[j + 1] = current;
  }

  return arr;
}

const example = [3, 2, 5, 4, 1];
console.log(insertionSort(example));
