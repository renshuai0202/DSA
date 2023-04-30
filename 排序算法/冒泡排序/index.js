function bubbleSort(array) {
  let i = 0, j, len = array.length, temp;
  for(i; i < len; i++) {
    for(j = i + 1; j < len; j++) {
      if(array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([1,4,7,2,5,9,0,45,23,66,1]));