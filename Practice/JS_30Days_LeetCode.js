//===============================================================================
//===============================================================================
//===============================================================================

// Curry

// function f(a) {
//   return function (b) {
//     if (b) return f(a * b);
//     return a;
//   };
// }

// console.log(f(1)(2)(3)(4)(5)());
//===============================================================================

// Curry

// function sum(a, b, c) {
//   return a + b + c;
// }

// var curry = function (fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     }

//     return (...nextArgs) => curried(...args, ...nextArgs);
//   };
// };

// const curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3)); // Output: 6
// console.log(curriedSum(1)(2)(3)); // Output: 6
// console.log(curriedSum(1, 2)(3)); // Output: 6
// console.log(curriedSum(1)(2, 3)); // Output: 6
// console.log(curriedSum()()(1, 2, 3)); // Output: 6

//===============================================================================

// Memorize

// function memorize(fn) {
//   let cache = {};
//   return function (...args) {
//     let key = JSON.stringify(args);
//     if (key in cache) {
//       console.log("From Cache");
//       return cache[key];
//     }
//     let result = fn(...args);
//     cache[key] = result;
//     return result;
//   };
// }

// let add = (...arr) => arr.reduce((sum, val) => (sum += val), 0);

// let arr = [1, 2, 3, 4, 5];

// let memorizedAdd = memorize(add);
// // console.log(add(...arr));
// // console.log(add(...arr));
// console.log(memorizedAdd(...arr));
// console.log(memorizedAdd(...arr));
// console.log(memorizedAdd(...arr));
// console.log(memorizedAdd(...arr));
// console.log(memorizedAdd(...[1, 2, 3, 4, 5, 6]));
// console.log(memorizedAdd(...[1, 2, 3, 4, 5, 6]));

//===============================================================================

//CALL Function only Once

// function once(fn) {
//   let isCalled = false;
//   return function (...arr) {
//     if (isCalled) {
//       return undefined;
//     }
//     isCalled = true;
//     return fn(...arr);
//   };
// }

// let add = (...arr) => arr.reduce((sum, el) => (sum += el), 0);
// let multiply = (...arr) => arr.reduce((sum, el) => (sum *= el), 1);
// let arr = [1, 2, 3, 4, 5];

// let onceAdd = once(add);
// let onceMul = once(multiply);
// console.log(onceAdd(...arr));
// console.log(onceAdd(...arr));
// console.log(onceMul(...arr));
// console.log(onceMul(...arr));

//===============================================================================

// var compose = function (functions = []) {
//   return function (x) {
//     return functions.reduceRight((result, currentFnc) => {
//       result = currentFnc(result);
//       return result;
//     }, x);
//   };
// };

// let multiply = (e) => e * 2;
// let add = (e) => e + 1;

// const fn = compose([multiply, add, multiply]);

// console.log(fn(4));

//===============================================================================
// Array.prototype.reduce = function (fn, init) {
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     init = fn(init, element);
//   }
//   return init;
// };

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((sum, el) => (sum += el), 0));
//===============================================================================

// async function sleep(time) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });
// }

// let t = Date.now();
// sleep(100).then(() => console.log(Date.now() - t)); // 100

//===============================================================================

//Time Limit Promise

// var timeLimit = function (fn, t) {
//   return async function (...args) {
//     const timeLimitPromise = new Promise((resolve, reject) => {
//       setTimeout(() => reject("Time Limit Exceeded"), t);
//     });
//     const returnedPromise = fn(...args);
//     return Promise.race([timeLimitPromise, returnedPromise]);
//   };
// };

// var timeLimit = function (fn, t) {
//   return async function (...args) {
//     return new Promise((resolve, reject) => {
//       //Reject if time exceed
//       const timeout = setTimeout(() => {
//         reject("Time Exceeded");
//       }, t);

//       // If resolved within time
//       fn(...args)
//         .then(resolve(...args))
//         .catch(reject)
//         .finally(() => clearTimeout(timeout));
//     });
//   };
// };

// const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
// limited(50)
//   .then((res) => console.log(res))
//   .catch(console.log); // "Time Limit Exceeded" at t=100ms

//===============================================================================

// Not Completed
// var promisePool = async function (functions, n) {};

// const sleep = (t) => new Promise((res) => setTimeout(res, t));
// promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log); // After 900ms

//===============================================================================

// 	Debounce

// var debounce = function (fn, t) {
//   let timerOut;
//   return function (...args) {
//     clearTimeout(timerOut);
//     timerOut = setTimeout(() => {
//       return fn(...args);
//     }, t);
//   };
// };

// const log = debounce(console.log, 1000);
// log("Hello"); // cancelled
// log("Hello"); // cancelled
// log("Hello"); // Logged at t=100ms

//===============================================================================
//Throttle

//===============================================================================
// JSON Deep Equal

// Example 1:

// Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
// Output: true
// Explanation: The keys and values match exactly.
// Example 2:

// Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
// Output: true
// Explanation: Although the keys are in a different order, they still match exactly.
// Example 3:

// Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
// Output: false
// Explanation: The array of numbers is different from the array of strings.
// Example 4:

// Input: o1 = true, o2 = false
// Output: false
// Explanation: true !== false

// var areDeeplyEqual = function (o1, o2) {
//   //Check if type of both are equal
//   if (typeof o1 !== typeof o2) {
//     return false;
//   }

//   //Check if values contain other data types apart from object.
//   if (typeof o1 !== "object" || o1 === null || o2 === null) {
//     return o1 === o2;
//   }

//   //Check if both are not array
//   if (Array.isArray(o1) !== Array.isArray(o2)) {
//     return false;
//   }

//   if (Array.isArray(o1)) {
//     if (o1.length !== o2.length) {
//       return false;
//     }

//     for (var i = 0; i < o1.length; i++) {
//       if (!areDeeplyEqual(o1[i], o2[i])) {
//         return false;
//       }
//     }

//     return true;
//   }

//   var keys1 = Object.keys(o1);
//   var keys2 = Object.keys(o2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (var key of keys1) {
//     if (!keys2.includes(key) || !areDeeplyEqual(o1[key], o2[key])) {
//       return false;
//     }
//   }

//   return true;
// };

// let o1 = {
//   x: null,
//   L: [1, 2, 3],
//   Address: {
//     l1: "H.No 21",
//     l2: "Basai",
//     pin: 122001,
//   },
// };
// let o2 = {
//   x: null,
//   L: [1, 2, 3],
//   Address: {
//     pin: 122001,
//     l1: "H.No 21",
//     l2: "Basai",
//   },
// };

// console.log(areDeeplyEqual(null, null));

//===============================================================================

// function convertObj(obj) {
//   return Object.keys(obj).reduce((newObj, key) => {
//     if (typeof obj[key] === "object") {
//       newObj[key] = convertObj(obj[key]);
//     }
//     if (typeof obj[key] === "number") {
//       newObj[key] = obj[key] + "";
//     } else {
//       newObj[key] = obj[key];
//     }

//     return obj;
//   }, {});
// }

// let obj1 = {
//   name: "Nk",
//   age: 24,
//   contact: {
//     HNo: 21,
//     contactNo: 9540724460,
//     Address: {
//       l1: "H.No 21",
//       l2: "Basai",
//       pin: 122001,
//     },
//   },
// };

// console.log(convertObj(obj1));

//===============================================================================
//Convert Object to JSON String

// var jsonStringify = function (object) {
//   if (object === null) {
//     return "null";
//   }

//   //If Array

//   if (Array.isArray(object)) {
//     let result = object.map((e) => jsonStringify(e));
//     return `[${result.join(",")}]`;
//   }

//   //If Object
//   if (typeof object === "object") {
//     let result = Object.keys(object).map(
//       (key) => `"${key}":${jsonStringify(object[key])}`
//     );

//     return `{${result.join(",")}}`;
//   }

//   //If String
//   if (typeof object === "string") {
//     return `"${object}"`;
//   }

//   return String(object);
// };

// let obj1 = {
//   name: "Nk",
//   age: 24,
//   contact: {
//     HNo: 21,
//     contactNo: 9540724460,
//     Address: {
//       l1: "H.No 21",
//       l2: "Basai",
//       pin: 122001,
//     },
//   },
// };

// let val = ["Name", "fdsf", "SDfsd", 1, true];

// console.log(jsonStringify(obj1));
// console.log(JSON.stringify(obj1));
//===============================================================================
