import { binarySearch } from './binarySearch.js';

function threeSum(arr) {
  arr = arr.sort((a, b) => a - b);
  const len = arr.length;
  let cnt = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (binarySearch(-arr[i]-arr[j], arr) > j) {
        cnt++
        console.log(arr[i], arr[j])
      }
    }
  }
  return cnt;
}

// console.log(threeSum([1,2,3,4,5,-1,-2,-3]))