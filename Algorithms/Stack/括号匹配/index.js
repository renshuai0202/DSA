function transform(str) {
  if(str === '}') {
    return '{';
  } else if(str === ')') {
    return '(';
  } else if(str === ']') {
    return '[';
  }
}

function checker(str) {
  const len = str.length;
  let stack = [], i = 0;
  for(i; i < len ; i++) {
    if(str[i] !== '{' && str[i] !== '[' && str[i] !== '(' && str[i] !== '}' && str[i] !== ']' && str[i] !== ')') {
      continue;
    } else if(str[i] === '{' || str[i] === '[' || str[i] === '(') {
      stack.push(str[i]);
    } else if(stack.length && stack[stack.length - 1] === transform(str[i])) {
      stack.pop();
    } else {
      return false;
    }
  }
  if(stack.length) {
    return false;
  }
  return true;
}

console.log(checker('()(){}[]([])'));
console.log(checker('()(){}[]([]'));
console.log(checker('(((()))[])(){}[]([])'));
console.log(checker('(var a = {b:[1,2,3]})'));
console.log(checker(')(var a = {b:[1,2,3]})'));


// tip: continue 跳过此次循环，不执行后面的代码，开始下一次的执行

