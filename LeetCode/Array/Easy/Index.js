// 1920. Build Array from Permutation
//===============================================================================
// 1929. Concatenation of Array

// var getConcatenation = function (nums) {
//   let length = nums.length;
//   for (let index = 0; index < length; index++) {
//     nums[length + index] = nums[index];
//   }
//   return nums;
// };

// console.log(getConcatenation([1, 2, 1]));
//===============================================================================

// 1470. Shuffle the Array

// var shuffle = function (nums, n) {
//   let newArr = new Array(n * 2);

//   for (let i = 0; i < n; i++) {
//     let x = nums[i];
//     let y = nums[i + n];
//     newArr.push(x);
//     newArr.push(y);
//   }

//   return newArr;
// };

// console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));

//===============================================================================

// 2011. Final Value of Variable After Performing Operations

// var finalValueAfterOperations = function (operations) {
//   let initialVal = 0;

//   operations.forEach((operation) => {
//     switch (operation) {
//       case "++X":
//       case "X++":
//         initialVal++;
//         break;
//       case "--X":
//       case "X--":
//         initialVal--;
//         break;

//       default:
//         break;
//     }
//   });
//   return initialVal;
// };

// console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));

//===============================================================================

//1512. Number of Good Pairs

// var numIdenticalPairs = function (nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// console.log(numIdenticalPairs([1, 1, 1, 1]));

//===============================================================================
// 1431. Kids With the Greatest Number of Candies

// var kidsWithCandies = function (candies, extraCandies) {
//   let greatest = Math.max(...candies);

//   return candies.map((candy) => {
//     if (candy + extraCandies >= greatest) {
//       return true;
//     }
//     return false;
//   });
// };

// console.log(kidsWithCandies([12, 1, 12], 10));

//===============================================================================

// 1672. Richest Customer Wealth

// var maximumWealth = function (accounts) {
//   let max = 0;

//   for (let i = 0; i < accounts.length; i++) {
//     let sum = accounts[i].reduce((sum, e) => (sum += e), 0);
//     if (sum > max) {
//       max = sum;
//     }
//   }
//   return max;
// };
// console.log(
//   maximumWealth([
//     [1, 2, 3],
//     [3, 2, 1],
//   ])
// );

//===============================================================================
//1480. Running Sum of 1d Array

// function sum(arr, index) {
//   let sum = 0;
//   for (let i = 0; i <= index; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// var runningSum = function (nums) {
//   return nums.map((_, i) => sum(nums, i));
// };
// console.log(runningSum([1, 1, 1, 1, 1]));

//===============================================================================

//2574. Left and Right Sum Differences
// var leftRightDifference = function (nums) {
//   let leftSum = 0;
//   let rightSum = nums.reduce((sum, curr) => (sum += curr), 0);
//   console.log(rightSum);

//   return nums.map((curr, i) => {
//     //leftSum - (rightSum - curr)
//     rightSum -= curr;
//     let res = Math.abs(leftSum - rightSum);
//     leftSum += curr;
//     return res;
//   });
// };
// console.log(leftRightDifference([10, 4, 8, 3]));

//===============================================================================
//1365. How Many Numbers Are Smaller Than the Current Number

// function countSmallerNumber(arr, num) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < num) {
//       count++;
//     }
//   }
//   return count;
// }
// var smallerNumbersThanCurrent = function (nums) {
//   return nums.map((num) => countSmallerNumber(nums, num));
// };

// console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
//===============================================================================

//1389. Create Target Array in the Given Order

// var createTargetArray = function (nums, index) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     arr.splice(index[i], 0, nums[i]);
//   }
//   return arr;
// };

// console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
//===============================================================================

//2652. Sum Multiples
// var sumOfMultiples = function (n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// console.log(sumOfMultiples(10));

//===============================================================================

//1528. Shuffle String

// var restoreString = function (s, indices) {
//   let newArr = new Array(indices.length);

//   for (let i = 0; i < indices.length; i++) {
//     newArr[indices[i]] = s[i];
//   }
//   return newArr.join("");
// };

// console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));

//===============================================================================

//1773. Count Items Matching a Rule

// var countMatches = function (items, ruleKey, ruleValue) {
//   let count = 0;

//   let ruleKeyObj = {
//     type: 0,
//     color: 1,
//     name: 2,
//   };

//   let index = ruleKeyObj[ruleKey];
//   for (let i = 0; i < items.length; i++) {
//     if (items[i][index] === ruleValue) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(
//   countMatches(
//     [
//       ["phone", "blue", "pixel"],
//       ["computer", "silver", "phone"],
//       ["phone", "gold", "iphone"],
//     ],
//     "type",
//     "phone"
//   )
// );

//===============================================================================
//2535. Difference Between Element Sum and Digit Sum of an Array

// var differenceOfSum = function (nums) {
//   let sum = nums.reduce((sum, e) => (sum += e), 0);
//   let digitSum = nums
//     .join("")
//     .split("")
//     .reduce((sum, e) => (sum += parseInt(e)), 0);
//   return Math.abs(sum - digitSum);
// };

// console.log(differenceOfSum([1, 15, 6, 3]));

//===============================================================================
//1588. Sum of All Odd Length Subarrays

// const getSum = (arr) => arr.reduce((sum, e) => (sum += e), 0);

// const divideArray = (arr, n) => {
//   let result = [];
//   while (arr.length) {
//     result.push(arr.splice(0, n));
//   }

//   return result;
// };

// var sumOddLengthSubarrays = function (arr) {};
// console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));

//===============================================================================

//1572. Matrix Diagonal Sum

// var diagonalSum = function (mat) {
//   let sum = 0;
//   let length = mat.length;
//   for (let i = 0; i < length; i++) {
//     let j = length - 1 - i;

//     if (i === j) {
//       sum += mat[i][i];
//     } else {
//       sum += mat[i][i];
//       sum += mat[i][j];
//     }
//   }

//   return sum;
// };

// console.log(
//   diagonalSum([
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//   ])
// );

//===============================================================================
// 2006. Count Number of Pairs With Absolute Difference K

// var countKDifference = function (nums, k) {
//   let cont = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (Math.abs(nums[i] - nums[j]) == k) {
//         cont++;
//       }
//     }
//   }
//   return cont;
// };

// console.log(countKDifference([3, 2, 1, 5, 4], 2));

//===============================================================================

//2656. Maximum Sum With Exactly K Elements

// var maximizeSum = function (nums, k) {
//   let max = Math.max(...nums);
//   let sum = 0;

//   for (let i = 0; i < k; i++) {
//     sum += max;
//     max = max + 1;
//   }
//   return sum;
// };

// console.log(maximizeSum([1, 2, 3, 4, 5], 3));

//===============================================================================

//804. Unique Morse Code Words

// let alphabet = [
//   ".-",
//   "-...",
//   "-.-.",
//   "-..",
//   ".",
//   "..-.",
//   "--.",
//   "....",
//   "..",
//   ".---",
//   "-.-",
//   ".-..",
//   "--",
//   "-.",
//   "---",
//   ".--.",
//   "--.-",
//   ".-.",
//   "...",
//   "-",
//   "..-",
//   "...-",
//   ".--",
//   "-..-",
//   "-.--",
//   "--..",
// ];

// function getUniqueWord(word) {
//   let str = "";

//   for (let i = 0; i < word.length; i++) {
//     let index = word.charCodeAt(i) - 97;
//     str += alphabet[index];
//   }
//   return str;
// }

// var uniqueMorseRepresentations = function (words) {
//   let count = 0;
//   words.reduce((obj, word) => {
//     let key = getUniqueWord(word);
//     if (!obj[key]) {
//       obj[key] = 1;
//       count++;
//     }

//     return obj;
//   }, {});

//   return count;
// };

// console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

//===============================================================================

//1684. Count the Number of Consistent Strings

// var countConsistentStrings = function (allowed, words) {
//   return words.filter((word) => {
//     return [...word].every((e) => allowed.includes(e));
//   }).length;
// };

// console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));

//===============================================================================

// 2744. Find Maximum Number of String Pairs

// var maximumNumberOfStringPairs = function (words) {
//   let count = 0;
//   for (let i = 0; i < words.length - 1; i++) {
//     for (let j = i + 1; j < words.length; j++) {
//       let reversed = words[j].split("").reverse().join("");

//       if (words[i] === reversed) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]));

//===============================================================================

//832. Flipping an Image

// var flipAndInvertImage = function (image) {
//   return image
//     .map((row) => row.reverse())
//     .map((row) => {
//       return row.map((e) => (e == 0 ? 1 : 0));
//     });
// };

// let img = [
//   [1, 1, 0],
//   [1, 0, 1],
//   [0, 0, 0],
// ];

// console.log(flipAndInvertImage(img));

//===============================================================================
//===============================================================================
//===============================================================================
//===============================================================================
//===============================================================================
