function countDown(number) {
  console.log(number);
  number--;
  if(number>=0){
    countDown(number)
  }
}
console.log(countDown(10));