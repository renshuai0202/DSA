function insertSort(array) {
  let i = 1, j, emptyIndex, len = array.length, temp;
  for(i; i < len; i++) {
    emptyIndex = i;
    temp = array[i];
    for(j = i - 1; j > 0; j--) {
      if(array[j] > array[emptyIndex]) {
        array[emptyIndex] = array[j];
        emptyIndex--;
        array[emptyIndex] = temp;
      }
    }
  }
  return array;
}

console.log(insertSort([1,4,6,8,12,45,89,3,2]));