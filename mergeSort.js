import { less } from './utils.js'

const merge = (arr, lo, mid, hi) => {
  const aux = arr.slice()
  let i = lo, j = mid + 1
  for (let k = lo; k <= hi; k++) {
    if (i > mid) arr[k] = aux[j++]
    else if (j > hi) arr[k] = aux[i++]
    else if (less(aux[j], aux[i])) arr[k] = aux[j++]
    else arr[k] = aux[i++]
  }
  return arr
}

const mergeSort = (arr, lo, hi) => {
  if (hi <= lo) return
  const mid = Math.floor(lo + (hi - lo) / 2)
  // 将左半边排序
  mergeSort(arr, lo, mid)
  // 将右半边排序
  mergeSort(arr, mid + 1, hi)
  // 归并结果
  merge(arr, lo, mid, hi)
  return arr
}

console.log(mergeSort([9, 8, 7, 5, 6, 2, 12, 1], 0, 7))