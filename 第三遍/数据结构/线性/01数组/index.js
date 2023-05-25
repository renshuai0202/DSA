const arr = [];
arr.push(1);
console.log(arr);
arr.push(2);
arr.push(3);
console.log(arr);
const res = arr.pop();
console.log(arr, res);
arr.unshift(0);
arr.unshift(-1);
console.log(arr);
arr.shift();
console.log(arr);

/**
 * push pop
 * unshift shift
 */
console.log('for of-------------');
for(const item of arr) {
  console.log(item);
}
console.log('i-------------');
for(let i = 0; i<arr.length; i++) {
  console.log(arr[i]);
}
console.log('forEach-------------');
const powArr = arr.forEach(item => {
  const res = Math.pow(item, 2);
  console.log(res);
});
// forEach不会改变原数组，也不会返回新数组
console.log(arr, powArr);

/**
 * 改变原数组 添加、删除、反转
 * push pop
 * unshift shift
 * splice
 * reverse
 */

/**
 * 返回新数组
 * 每一个执行相同操作，返回新数组
 * 过滤符合条件的
 * 拷贝截取一段
 * 连接两个数组
 * 
 * concat
 * map
 * filter
 * slice
 */

/**
 * 不改变原数组
 * forEach
 * for循环
 */