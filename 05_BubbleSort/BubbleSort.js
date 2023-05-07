let arr = [1, 2, 3, 5, 4];

// Bubble Sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort(arr));
