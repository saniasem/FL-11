function reverseNumber(num) {
  let reverseNum = num.toString().split('').reverse().join('');
  return Math.sign(num) * parseInt(reverseNum);
}

reverseNumber(123);