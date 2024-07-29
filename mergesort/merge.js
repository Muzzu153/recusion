#!/usr/bin/env node

let arr1 = [4, 5, 9];
let arr2 = [1, 2, 3];

function merge(left, right) {
  let sortedArr = []; // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] > right[0]) {
      sortedArr.push(right.shift());
    } else if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}

console.log(merge([2, 4, 5], [1, 3, 8]));
console.log(merge([1, 10], [0, 7, 9]));
console.log(merge(arr1, arr2));
console.log(merge(arr2, arr1));
console.log(merge([4, 5, 9], [1, 2, 3]));

const mergeSort = function mergeSortAlgorithm(array) {
  //   let left, middle, right;
  if (array.length < 2) return array;
  let middle = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  return merge(left, right);
};

console.log(mergeSort([1, 2, 3, 9, 10, 4, 5]));
