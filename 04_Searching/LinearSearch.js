function linearSearch(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el === search) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 17));

//===============================================================================
//===============================================================================
