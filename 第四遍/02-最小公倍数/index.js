function lcm(num1, num2) {
  if (num1 % num2 === 0) {
    return num1;
  } else if (num2 % num1 === 0) {
    return num2;
  } else {
    // const g = gcd(num1, num2);
    // const x = num1/g;
    // const y = num2/g;
    // return x * y * g;
    const g = gcd(num1, num2);
    return num1 * num2 / g;
  }
}

function gcd(num1, num2) {
  if (num1 === num2) {
    return num1;
  } else if(num1 < num2) {
    return gcd(num1, num2 - num1);
  } else {
    return gcd(num1 - num2, num2);
  }
}

console.log(lcm(12, 18));