//Merge two sorted array

function merge(a, b) {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    result.push(a[i]);
    i++;
  }
  while (j < b.length) {
    result.push(b[j]);
    j++;
  }

  return result;
}

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

let arr = [2, 5, 1, 6, 4, 7, 8, 10, 9, 13, 1, 2, 19, 21, 47, 3, 7, 51];
console.log(mergeSort(arr));
