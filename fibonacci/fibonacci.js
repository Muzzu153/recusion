#!/usr/bin/env node

const fibonacci = function getfibonaciSequence(num) {
  console.log('fibonacci series');
  if (num === 0) {
    return [0];
  }
  if (num === 1) {
    return [0, 1];
  }
  let num1 = 0;
  let num2 = 1;
  let arr = [0, 1];
  let result;
  for (let i = 2; i <= num; i++) {
    result = num1 + num2;
    arr.push(result);
    num1 = num2;
    num2 = result;
  }
  return arr;
};

console.log(fibonacci(8));
