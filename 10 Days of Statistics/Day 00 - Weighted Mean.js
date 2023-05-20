// const assert = require("assert")

let X2 = [10, 40, 30, 50, 20];
let W2 = [1, 2, 3, 4, 5];
let W = "1 2 3 4 5 6 7 8 9 10 10 40 30 50 20 10 40 30 50 20";
let X = "10 40 30 50 20 10 40 30 50 20 1 2 3 4 5 6 7 8 9 10";
W = W.split(" ");
X = X.split(" ");

function weightedMean(X, W) {
  // copy for hackerrank from here
  W = W.map((x) => Number(x));
  X = X.map((x) => Number(x));
  let sumX = W.reduce((pre, cur) => cur + pre, 0);
  let sumXmWArr = W.map((x, ind) => x * X[ind]);
  let sumXmW = sumXmWArr.reduce((pre, cur) => cur + pre, 0);
  // console.log((sumXmW/sumX).toFixed(1)); // for HackerRank
  // to here and uncomment line above
  return Number((sumXmW / sumX).toFixed(1)); // for gitHub
}
function isEqual(actual, expected, message) {
  if (actual === expected) console.log("true");
  else console.log(`${message}: ${actual} is NOT strict equal to ${expected}!`);
}
isEqual(weightedMean(X, W), 9.6, "case 1");
isEqual(weightedMean(X2, W2), 32, "case 2");
