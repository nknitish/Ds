function binarySearch(arr, search) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = parseInt((start + end) / 2);

    if (search === arr[middle]) {
      return middle;
    }
    if (search > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24, 68, 90], 68));
//===============================================================================

// Polyfill of String.includes()

function stringSearch(str, search) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < search.length; j++) {
      if (str[i + j] !== search[j]) {
        break;
      } else if (j === search.length - 1) {
        return true;
      }
    }
  }

  return false;
}

console.log(stringSearch("abomcdgomgfdsomdfsd3mdd", "om"));
//===============================================================================
