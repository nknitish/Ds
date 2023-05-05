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
