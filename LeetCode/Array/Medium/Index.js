//===============================================================================
// 3. Longest Substring Without Repeating Characters

// var lengthOfLongestSubstring = function (s) {
//   let max = 0;
//   let word = "";

//   // running a loop till length of string
//   for (let i = 0; i < s.length; i++) {
//     //Running a loop for each char in string
//     for (let j = i; j < s.length; j++) {
//       //If char present in word then jump our from loop
//       if (word.includes(s[j])) {
//         break;
//       }

//       //Storing word
//       word += s[j];
//     }

//     //Replacing word with max
//     if (max < word.length) {
//       max = word.length;
//     }

//     //reset word for next iteration
//     word = "";
//   }

//   //return max
//   return max;
// };

// console.log(lengthOfLongestSubstring("dvdf"));

//===============================================================================
//===============================================================================
//===============================================================================
//===============================================================================
//===============================================================================
