//===============================================================================

// 2. MULTIPLE POINTERS
// Creating pointers or values that correspond to an index or position and move towards the beginning,
// end or middle based on a certain condition
// Very efficient for solving problems with minimal space complexity as well

function sumZero(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }

  return false;
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// ------------------------------------------------
// Refactor

function sumZero1(arr) {
  let left = 0;
  let right = arr.length - 1;

  let result = [];

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 14) {
      result.push([arr[left], arr[right]]);
    }
    if (sum > 14) {
      right--;
    } else {
      left++;
    }
  }

  return result;
}

// console.log(sumZero1([0, 1, 2, 4, 5, 6, 7, 8, 9]));

//===============================================================================

// Frequency Counter Pattern

// function countUniqueValues(arr = []) {
//   let res = arr.reduce((obj, el) => {
//     obj[el] = 1;
//     return obj;
//   }, {});

//   return Object.keys(res).length;
// }

// Multiple Pointer

function countUniqueValues(arr = []) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

// console.log(countUniqueValues([1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5]));

//===============================================================================
// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

function averagePair(arr, num) {
  // add whatever parameters you deem necessary - good luck!

  if (!arr.length) {
    return false;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = arr[start] + arr[end] / 2;

    if (avg == num) {
      return true;
    }
    if (avg < num) {
      start++;
    } else {
      end--;
    }
  }

  return false;
}

// console.log(averagePair([1, 2, 3, 4, 5], 2.5));

//===============================================================================

// Write a function called isSubsequence which takes in two strings and checks whether the
// characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.

// function isSubsequence(str1, str2) {
//   let i = 0;
//   let j = 0;

//   if (!str1) return true;

//   while (j < str2.length) {
//     if (str2[j] == str1[i]) i++;
//     if (i == str1.length) return true;
//     j++;
//   }
//   return false;
// }

//--------------------------------------

// Recursive Way Not O(n)
function isSubsequence(str1, str2) {
  if (!str1) return true;
  if (!str2) return false;
  if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("hello", "heello wold"));

//===============================================================================
