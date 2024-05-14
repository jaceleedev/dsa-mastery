/**
 * 버블 정렬 알고리즘으로 숫자 배열을 정렬한다.
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
function bubbleSort(arr) {
  let n = arr.length;

  do {
    let newN = 0; // 새로운 n은 마지막으로 교환된 위치를 저장한다.
    for (let i = 1; i < n; ++i) {
      // 왼쪽의 요소가 오른쪽의 요소보다 크다면
      if (arr[i - 1] > arr[i]) {
        // 두 요소를 교환한다.
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;

        // 마지막으로 교환된 위치를 업데이트한다.
        newN = i;
      }
    }
    n = newN; // n을 새롭게 업데이트한다. 이러면 다음 반복에서는 이미 정렬된 부분을 건너뛴다.
  } while (n > 0);

  return arr;
}

const example = [1, 5, 4, 2, 3];
console.log(bubbleSort(example));
