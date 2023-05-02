function quickSort(array, left = 0, right = array.length-1) {
  if(left < right) {
    const axis = partition(array, left, right);
    quickSort(array, left, axis-1);
    quickSort(array, axis+1, right);
  }
  return array;
}

function partition(array, left, right) {
  let axisValue = array[right], i = left, j = right-1;
  while(i<=j) {
    if(array[i] <= axisValue) {
      i++;
    } else if(array[j] > axisValue) {
      j--;
    } else {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  [array[i], array[right]] = [array[right], array[i]];
  return i;
}

console.log(quickSort([1,3,6,8,2,5,1]));
/**
 * 前置知识：
 * ES6解构赋值，省去定义临时变量
 * [a,b]=[b,a]交换数组两个位置的值
 * 
 * tip：
 * 基准情形：left>=right
 * 交换位置后，i和j要继续移动
 */

/**
 * 双指针+轴线
 * 1. 分区partition(array, left, right)
 * 轴线为右端值
 * 左指针为left，右指针为右端点-1
 * 比较左值和轴值，如果小于，则左指针+1
 * 比较右值和轴值，如果大于，则右指针-1
 * 重复前2步，直到双指针不再移动
 * 交换两个指针所存储数据的值
 * 重复前3步，直到两个指针相等或左指针大于右指针
 * 交换轴线和左指针的值
 * 返回左指针的位置
 * 2.使用分区quickSort(array,left=0,right=array.length)
 * 如果left小于right
 * 通过分区，找到轴线
 * 找到左侧分区，执行快排
 * 找到右侧分区，执行快排
 * 否则，返回array
 */
