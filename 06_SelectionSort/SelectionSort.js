// Selection Sort

let arr = [1, 3, 5, 4, 2];
function selectionSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    //Assume first index is smallest number in array
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      count++;
      //Compare min with other values in array
      if (arr[min] > arr[j]) {
        // set min to the minimum value in array
        min = j;
      }
    }

    // Swap it with current index
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  console.log(count);

  // return arr

  return arr;
}

console.log(selectionSort(arr));
