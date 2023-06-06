
let n = 6;
let number = n.toString(2);
let arr = number.split("");
console.log(arr);
let consecutiveMax = 0;
let consecutiveCur = 0;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] == 1) {
    ++consecutiveCur;
    console.log("forCur", consecutiveCur);
    if (consecutiveCur > consecutiveMax) {
      consecutiveMax = consecutiveCur;
    }
    console.log("for", consecutiveMax);
  } else {
    consecutiveCur = 0; // reset count to 0 for non-1 values
  }
}
console.log(consecutiveMax);