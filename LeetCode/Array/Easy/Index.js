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
//===============================================================================
//===============================================================================
//===============================================================================
//===============================================================================
//===============================================================================
//===============================================================================
