// 已知array1、 array2中的每个元素都不重复。
function findOverlap(array1, array2) {
  const len1 = array1.length, len2 = array2.length;
  let i = 0, j, arrayResult = [];
  for(i; i < len1; i++) {
    for(j = 0; j < len2; j++) {
      if(array1[i] === array2[j]) {
        arrayResult.push(array1[i]);
        break;
      }
    }
  }
  return arrayResult;
}

console.log(findOverlap([1,2,3,4,5,9,7,6,10,8], [10,12,15,34,67,3,6,9,1,12]));
// 注意：循环一次后，j达到最大值。记得每次j重新设定起始值