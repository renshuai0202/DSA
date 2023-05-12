/**
 * 从索引0开始，假如其值为最小值。
 * 依次与后面的值进行比较，记录最小的值和其索引。
 * 比较完成后，将最小值和索引为0的值交换。
 */

function selectSort(array) {
  const len = array.length;
  let min, minIndex;
  for(let i = 0; i<len; i++) {
    minIndex = i;
    min = array[minIndex];
    for(let j = i+1; j<len; j++) {
      if(array[j] < min) {
        minIndex = j;
        min = array[minIndex];
      }
    }
    if(i !== minIndex) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

console.log(selectSort([1, 4, 7, 9, 14, 2, 5, 6, 7, 3, 9]));

/**
 * 时间复杂度O(n^2) 实际是冒泡排序时间复杂度的一半
 * 选择排序和插入排序相比：
 * 选择排序适合大致逆序，插入排序适合大致有序
 */