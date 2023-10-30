import { less, exch } from './utils.js'

const shellSort = arr => {
  const len = arr.length
  let h = 1
  while (h < len / 3) h = Math.floor(3 * h + 1)
  while ( h >= 1) {
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && less(arr[j], arr[j - h]); j -= h) {
        exch(arr, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }
  return arr
}

console.log(shellSort([9, 1, 2, -3, 7, 6, 3]))