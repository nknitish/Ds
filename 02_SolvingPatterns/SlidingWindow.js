// 3. Sliding window =>
// This pattern involve creating a window which can be either a array or number from one position
// to another position.
// Depending on condition, the window either closes or increase ( and a new  window is created )
// Very useful for track a subset of data in a array or string.

// Native Solution O(n^2)

function maxSubarraySum(arr, n) {
  // If array is blank/empty return null
  if (!arr.length) {
    return null;
  }

  if (n > arr.length) {
    return arr.reduce((sum, e) => (sum += e), 0);
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = arr.slice(i, i + n).reduce((sum, e) => (sum += e), 0);
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

// refactored

function maxSubarraySum(arr, n) {
  // If array is blank/empty return null
  if (!arr.length) {
    return null;
  }

  if (n > arr.length) {
    return arr.reduce((sum, e) => (sum += e), 0);
  }

  let max = 0;
  let tempSum = arr.slice(0, n).reduce((sum, e) => (sum += e), 0);
  max = tempSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    max = Math.max(max, tempSum);
  }

  return max;
}

// console.log(maxSubarraySum([4, 2, 1, 6, 9, 1, 2], 2));

//===============================================================================

// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the
// integer passed to the function. If there isn't one, return 0 instead.

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

function minSubArrayLen(arr, n) {
  arr = arr.sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;

    if (sum >= n) {
      console.log(arr);
      return i + 1;
    }
  }

  return 0;
}

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));

//===============================================================================

//===============================================================================

//===============================================================================
