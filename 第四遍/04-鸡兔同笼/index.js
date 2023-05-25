function chickenRabbit(sum, foot) {
  for(let chicken = 0; chicken < sum; chicken++) {
    if (chicken * 2 + (sum - chicken) * 4 === foot) {
      return { chicken, rabbit: sum - chicken };
    }
  }
  return '无解';
}

console.log(chickenRabbit(10, 32));
