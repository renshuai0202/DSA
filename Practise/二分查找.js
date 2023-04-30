// [1,2,3,4,5,6,9,10,11,12]
// 8
// 找到返回下标，找不到返回-1
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1, mid, midNum;
  while(left <= right) {
    mid = Math.floor((left + right)/2);
    midNum = arr[mid];
    if (target === midNum) {
      return mid;
    } else if (target < midNum) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
