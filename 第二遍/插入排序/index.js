/**
 * 插入排序
 * 从索引为1开始，使用临时变量保存该索引和其值。
 * 与左侧的值进行逐个比较
 * 如果左侧的值比临时变量的值小，则将左侧的值右移，即索引左移
 * 如果左侧的值比临时变量大，则停止移动，交换
 */

function insertSort(array) {
  const len = array.length;
  let tempIndex, tempValue;
  
  for(let i = 1; i<len; i++) {
    tempIndex = i;
    tempValue = array[i];

    for(j = i - 1; j>=0; j--) {
      if(array[j] >= tempValue) {
        array[tempIndex] = array[j];
        tempIndex--;
      } else {
        // 如果空白格左侧的比取出的值还小，则停止，将取出的值放在空白位置
        array[tempIndex] = tempValue;
        break;
      }
      // 如果空白格子已经移动到最左端，说明取出的值是最小的
      if(tempIndex === 0) {
        array[tempIndex] = tempValue;
      }
    }
  }

  return array;
}

console.log(insertSort([1, 4, 6, 8, 12, 16, 53, 25, 1, 3, 4, 89, 2]));