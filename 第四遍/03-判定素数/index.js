function prime1(num) {
  if (num === 1) {
    return true;
  }

  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      console.log(i);
      return false;
    }
  }

  return true;
}

// console.log('prime1', prime1(999999937));

console.log('-------优化---------');

function prime2(num) {
  if (num === 1) {
    return true;
  }

  for(let i = 2; i < num / 2; i++) {
    if(num % i === 0) {
      console.log(i);
      return false;
    }
  }

  return true;
}

console.log('prime2', prime2(999999937));