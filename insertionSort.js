import { exch, less } from './utils.js'

const insertionSort = arr => {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0 && less(arr[j], arr[j - 1]); j--) {
      exch(arr, j, j - 1)
    }
  }
  return arr
}

console.log(insertionSort([2, 3, 4, -1, -9, 12, 9]))