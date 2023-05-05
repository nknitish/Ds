function countDown(n) {
  if (n <= 0) {
    console.log("All Done");
    return;
  }

  console.log(n);
  countDown(n - 1);
}

// console.log(countDown(10));

//===============================================================================

function sumRange(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumRange(n - 1);
}

// console.log(sumRange(5));

//===============================================================================

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// console.log(factorial(7));
//===============================================================================

// Helper function

function collectOddValues(arr) {
  let result = [];

  function helper(helperArr) {
    if (helperArr.length === 0) {
      return;
    }

    if (helperArr[0] % 2 === 0) {
      result.push(helperArr[0]);
    }

    helper(helperArr.slice(1));
  }

  helper(arr);

  return result;
}

// console.log(collectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]));
//===============================================================================

// Pure Recursion

function collectOddValues1(arr) {
  let result = [];

  if (!arr.length) {
    return result;
  }

  if (arr[0] % 2 === 0) {
    result.push(arr[0]);
  }

  result = result.concat(collectOddValues1(arr.slice(1)));
  return result;
}

// console.log(collectOddValues1([2, 3, 4, 5, 6, 7, 8, 9, 10]));

//===============================================================================

// power
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(n, m) {
  if (m === 0) {
    return 1;
  }

  return n * power(n, m - 1);
}

// console.log(power(2, 3));

//===============================================================================

// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  if (!arr.length) {
    return 1;
  }

  let res = arr[0] * productOfArray(arr.slice(1));
  return res;
}

// console.log(productOfArray([1, 2, 3, 10]));

//===============================================================================
//===============================================================================
//===============================================================================
