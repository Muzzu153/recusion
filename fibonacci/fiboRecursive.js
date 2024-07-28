#!/usr/bin/env node

const fiboRecursive = function getArrayOfFibonacciSeriesRecursively(num) {
  if (num < 0) return 'Please enter a valid number';
  if (num < 1) return [0];
  if (num < 2) return [0, 1];

  const a = fiboRecursive(num - 1);
  a.push(a[num - 2] + a[num - 1]);
  return a;
};

console.log(fiboRecursive(6));
