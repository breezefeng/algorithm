import { less, exch } from './utils.js'

const selectionSort = arr => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let min = i
    for (let j = i + 1; j < len; j++) {
      if (less(arr[j], arr[min])) min = j
    }
    exch(arr, i, min)
  }
  return arr
}

console.log(selectionSort([-1, -5, 5, 1, 2, 4, 3, 99, 12, -80]))