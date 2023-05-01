// 散列表
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

function hasRepetitiveNumber2(array) {
  const len = array.length;
  let store = {}, i = 0;
  for(i; i < len; i++) {
    if(store[array[i]] === undefined) {
      store[array[i]] = 1;
    } else {
      return -1;
    }
  }
}

console.log(hasRepetitiveNumber2([1, 2, 3, 4, 5, 6]));
console.log(hasRepetitiveNumber2([1, 2, 3, 4, 4, 5]));