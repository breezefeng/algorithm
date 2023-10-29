function binarySearch(key, arr) {
  let lo = 0;
  let high = arr.length;
  while (lo <= high) {
    let mid = Math.floor(lo + (high - lo) / 2);
    if (key < arr[mid]) high = mid - 1;
    else if (key > arr[mid]) lo = mid + 1;
    else return mid;
  }

  return -1
}