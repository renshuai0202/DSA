function quickSelect(array, k) {
  const axisIndex = Math.floor(Math.random()*array.length), axisValue = array[axisIndex];
  let arrayLeft = [], arrayRight = [], axisCount = 0;

  for(let i=0; i<array.length; i++) {
    if(array[i]<axisValue) {
      arrayLeft.push(array[i]);
    } else if(array[i]>axisValue) {
      arrayRight.push(array[i]);
    } else {
      axisCount++;
    }
  }

  if(k<=arrayLeft.length) {
    return quickSelect(arrayLeft, k);
  } else if(k>arrayLeft.length+axisCount) {
    return quickSelect(arrayRight, k-arrayLeft.length-axisCount)
  } else {
    return axisValue;
  }
}

console.log(quickSelect([1,10,6,9,2,7,4,8,5], 1));

// 使用二分查找和快速排序
// 时间复杂度为O(N)

// tip: if(k<=arrayLeft.length) 一定要有等于号 