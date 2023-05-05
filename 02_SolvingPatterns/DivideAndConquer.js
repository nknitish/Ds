// 4. Divide and Conquer =>
// This pattern involve dividing a dataset into smaller chunks and then repeating a process with subset of data.
// This pattern can tremendously decrease time complexity.

// Search // O(Log N) //Binary Search

function search(arr, n) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let middle = parseInt((start + end) / 2);

    if (arr[middle] === n) {
      return middle;
    }

    if (n > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 9, 10], 8));
