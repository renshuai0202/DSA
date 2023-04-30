function hasRepetitiveNumber(array) {
  const len = array.length;
  let i = 0, arrayTemp = [];
  for(i; i < len; i++) {
    if(arrayTemp[array[i]] === undefined) {
      arrayTemp[array[i]] = array[i];
    } else {
      return -1;
    }
  }
}

console.log(hasRepetitiveNumber([1, 2, 3, 4, 5, 6]));
console.log(hasRepetitiveNumber([1, 2, 3, 4, 4, 5]));