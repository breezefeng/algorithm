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

// 自顶向下
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

// 自底向上
const mergeSortBU = arr => {
  const len = arr.length
  for (let sz = 1; sz < len; sz = sz + sz) {
    for (let lo = 0; lo < len - sz; lo += sz + sz) {
      merge(arr, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, len - 1))
    }
  }
  return arr
}

console.log(mergeSortBU([9, 8, 7, 5, 6, 2, 12, 1], 0, 7))