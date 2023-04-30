function miniSort(array) {
  const len = array.length;
  let miniIndex, i = 0, j, temp;
  for(i; i < len; i++) {
    miniIndex = i;
    for(j = i; j < len ;j++) {
      if(array[miniIndex] > array[j]) {
        miniIndex = j;
      }
    }
    if (miniIndex !== i) {
      temp = array[miniIndex];
      array[miniIndex] = array[i];
      array[i] = temp;
    }
  }
  return array;
}

console.log(miniSort([1,4,7,9,2,0,3,6,8]));
// “最小值排序”是我起的名字，书上叫“选择排序”
// 书：《数据结构与算法图解》