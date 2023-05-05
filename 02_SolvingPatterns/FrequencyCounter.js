// 1. Frequency Counter =>
// Frequency Conquer uses objects/sets to collect values/Frequency of values.
// This can avoid the need for nested loop or O(n^2) with string or arrays.

function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let element = arr1[i];
    let index = arr2.indexOf(element ** 2);

    if (index === -1) {
      return false;
    }

    arr2.splice(index, 1);
  }

  return true;
}

// console.log(same([1, 2, 1], [4, 4, 1]));

//---------------------------------------------

//  Frequency Counter Pattern

function getFrequency(arr) {
  return arr.reduce((newObj, el) => {
    newObj[el] = newObj[el] + 1 || 1;
    return newObj;
  }, {});
}

function same1(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  let arr1Frequency = getFrequency(arr1);
  let arr2Frequency = getFrequency(arr2);

  for (let key in arr1Frequency) {
    if (!(key ** 2 in arr2Frequency)) {
      return false;
    }

    if (arr1Frequency[key] !== arr2Frequency[key ** 2]) {
      return false;
    }
  }

  return true;
}

// console.log(same1([1, 2, 3, 3, 5], [9, 9, 4, 25, 1]));

//===============================================================================

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let str1frequency = getFrequency([...str1]);
  let str2frequency = getFrequency([...str2]);

  for (const key in str1frequency) {
    if (!(key in str2frequency)) {
      return false;
    }

    if (str1frequency[key] !== str2frequency[key]) {
      return false;
    }
  }
  return true;
}

// console.log(validAnagram("aaz", "zza"));

// ------------------------------------------------

function validAnagram1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};
  for (let i = 0; i < str1.length; i++) {
    const element = str1[i];
    lookup[element] = lookup[element] + 1 || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const key = str2[i];

    if (!lookup[key]) {
      return false;
    } else {
      lookup[key] -= 1;
    }
  }

  return true;
}

// console.log(validAnagram1("aaz", "zaa"));

//===============================================================================

// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length != num2.length) {
    return false;
  }

  let num1Frequency = [...num1].reduce((obj, v) => {
    obj[v] = obj[v] + 1 || 1;
    return obj;
  }, {});

  let num2Frequency = [...num2].reduce((obj, v) => {
    obj[v] = obj[v] + 1 || 1;
    return obj;
  }, {});

  for (const key in num1Frequency) {
    if (!(key in num2Frequency)) {
      return false;
    }

    if (num1Frequency[key] !== num2Frequency[key]) {
      return false;
    }
  }

  return true;
}

// console.log(sameFrequency(1882, 2881));

//===============================================================================

// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// function areThereDuplicates(...arg) {
//   let obj = {};
//   for (let i = 0; i < arg.length; i++) {
//     const element = arg[i];

//     if (element in obj) {
//       return true;
//     } else {
//       obj[element] = 1;
//     }
//   }

//   return false;
// }

// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates("a", "b", "c", "d"));

//===============================================================================
//===============================================================================
//===============================================================================
