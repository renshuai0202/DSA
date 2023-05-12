// function QuickSort(array) {
//   this.array = array;
// };

// QuickSort.prototype.partition = function (left, right) {

//   const axis = Math.floor((right-left)/2)+left;
//   const axisValue = this.array[axis];
//   let leftIndex = left, rightIndex = right;

//   while(true) {
//     if(this.array[leftIndex] < axisValue) {
//       leftIndex++;
//     } else if(this.array[rightIndex] > axisValue){
//       rightIndex--;
//     } else if(leftIndex !== rightIndex) {
//       [this.array[leftIndex], this.array[rightIndex]] = [this.array[rightIndex], this.array[leftIndex]];
//       leftIndex++;
//       rightIndex--;
//     } else {
//       [this.array[axis], this.array[leftIndex]] = [this.array[leftIndex], this.array[axis]];
//       break;
//     }
//   }

//   if(leftIndex-1-left>1 && leftIndex-1 > left) {
//     this.partition(left, leftIndex-1);
//   }

//   if(right-(leftIndex+1)>1 && right > leftIndex+1) {
//     this.partition(leftIndex+1, right);
//   }
// }

// QuickSort.prototype.quickSort = function() {
//   if(this.array.length <=1) {
//     return this.array;
//   } else {
//     this.partition(0, this.array.length-1);
//   }
//   return this.array;
// }

// const qc = new QuickSort([1, 5, 23, 78, 2, 56, 2, 66, 3, 12, 1, 2, 9]);

// console.log(qc.quickSort());

function quickSort(array, left, right) {
  if(left >= right) {
    return;
  }

  const randomAxis = getRandomAxis(array, left, right);
  quickSort(array, left, randomAxis-1);
  quickSort(array, randomAxis+1, right);
}

function getRandomAxis(array, left, right) {
  const axis = Math.floor(Math.random()*(right-left)+1)+left;
  let i = left, j = right-1;
  [array[axis], array[right]] = [array[right], array[axis]];
  const axisValue = array[right];
  
  while(true) {
    if(i>=j) {
      break;
    }

    if(array[i] < axisValue) {
      i++;
    } else if(array[j] > axisValue){
      j--;
    } else if(i!==j&&i<j){
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  console.log(123);

  [array[i], array[right]] = [array[right], array[i]];
  return i;
}

const array = [1, 5, 23, 78, 2, 56, 2, 66, 3, 12, 1, 2, 9];
quickSort(array, 0, array.length - 1);
console.log(array);