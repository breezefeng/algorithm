import { binarySearch } from './binarySearch.js';

function twoSum(arr) {
  arr = arr.sort((a, b) => a - b);
  const len = arr.length;
  let cnt = 0;
  for (let i = 0; i < len; i++) {
    if (binarySearch(-arr[i], arr) > i) 
      cnt++;
  }
  return cnt;
}

console.log(twoSum([1,2,3,4,-9,-8,-6,5,6,-3, -3,-6]))