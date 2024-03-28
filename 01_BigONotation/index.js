// Big O Notation

function addUpto(n) {
  return (n * (n + 1)) / 2;
}

function addUpto2(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
console.log(addUpto2(30690));
let t2 = performance.now();
console.log(`Time Elapsed : ${(t2 - t1) / 1000} second`);

//-----------------------------------------------------------------------

//Array Method

// Push - O(1);
// Pop - O(1);
// Shift - O(n); //Remove element from 0th index
// Unshift - O(n); // Add Element at 0th index

// O(n)=>
let arr = ["A", "B", "C", "D", "F"];
arr.splice(4, 0, "E");
console.log(arr);

// Search
// - By Value O(n)
// - By Index O(1)
