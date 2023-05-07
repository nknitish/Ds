// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  if (!str.length) return "";

  let lastChar = str.charAt(str.length - 1);
  return lastChar + reverse(str.slice(0, str.length - 1));
}

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
// console.log(reverse("Hello world"));

//===============================================================================
// isPalindrome

function isPalindrome(str) {
  if (!str.length || str.length === 1) return true;
  if (str.length === 2) {
    return str[0] === str[1];
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }

  return false;
}

// console.log(isPalindrome("amanaplanacanalpandemonium"));

//===============================================================================

// someRecursive

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  if (!arr.length) return false;

  if (callback(arr[0])) {
    return true;
  }

  return someRecursive(arr.slice(1), callback);
}

// console.log(someRecursive([4, 6, 8, 7], isOdd));
//===============================================================================

// flatten

// function flatten(arr) {
//   return arr.reduce((newArr, el) => {
//     if (Array.isArray(el)) {
//       return newArr.concat(flatten(el));
//     } else {
//       newArr.push(el);
//     }
//     return newArr;
//   }, []);
// }

function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (Array.isArray(el)) {
      newArr = newArr.concat(flatten(el));
    } else {
      newArr.push(el);
    }
  }

  return newArr;
}

// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

//===============================================================================

// capitalizeFirst

const toUpperCase = (str) => str[0].toUpperCase() + str.slice(1);
function capitalizeFirst(arr) {
  let newArr = [];
  if (!arr.length) return [];
  newArr = [toUpperCase(arr[0]), ...capitalizeFirst(arr.slice(1))];
  return newArr;
}

// console.log(capitalizeFirst(["car", "taco", "banana"]));

//===============================================================================

// nestedEvenSum

function nestedEvenSum(obj) {
  return Object.keys(obj).reduce((sum, key) => {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    } else if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    }

    return sum;
  }, 0);
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// console.log(nestedEvenSum(obj2));

//===============================================================================
//capitalizeWords

function capitalizedWords(arr) {
  let newArr = [];
  if (!arr.length) return [];
  newArr = [arr[0].toUpperCase(), ...capitalizedWords(arr.slice(1))];
  return newArr;
}

let words = ["i", "am", "learning", "recursion"];

// console.log(capitalizedWords(words));

//===============================================================================
//stringifyNumbers

// function stringifyNumbers(obj) {
//   let newObj = {};
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       newObj[key] = obj[key] + "";
//     } else if (typeof obj[key] === "object") {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }

//   return obj;
// }

function stringifyNumbers(obj) {
  return Object.keys(obj).reduce((newObj, key) => {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key] + "";
    } else if (typeof obj[key] === "object") {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
    return newObj;
  }, {});
}

// function stringifyNumbers(obj) {
//   var newObj = {};
//   for (var key in obj) {
//     if (typeof obj[key] === "number") {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

//===============================================================================

function collectStrings(obj) {
  return Object.keys(obj).reduce((arr, key) => {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arr = arr.concat(collectStrings(obj[key]));
    }
    return arr;
  }, []);
}

const obj3 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj3));

//===============================================================================
//===============================================================================
