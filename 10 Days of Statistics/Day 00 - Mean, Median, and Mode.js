let input = "10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060";
// COPY from here
let inputArrLenght = input.split("\n")[0];
let inputArr = input.split("\n")[1].split(" ");
inputArr = inputArr.map((number) => Number(number));
inputArr = inputArr.sort((a, b) => a - b);
const mean = (arr, arrLength) => {
  let result = arr.reduce((pre, cur) => cur + pre, 0) / arrLength;
  return result;
};

const median = (arr, arrLength) => {
  let result =
    arrLength % 2
      ? arr[(arrLength + 1) / 2]
      : (arr[arrLength / 2 - 1] + arr[arrLength / 2]) / 2;
  return result;
};
const mode = (arr) => {
  const mode = {};
  let max = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
  return max;
};
// console.log(mean(inputArr, inputArrLenght)); // uncomment for hackerrank
// console.log(median(inputArr, inputArrLenght)); // uncomment for hackerrank
// console.log(mode(inputArr, inputArrLenght)); // uncomment for hackerrank

// COPY to here

function isEqual(actual, expected, message) {
  if (actual === expected) console.log(`${message}: true`);
  else console.log(`${message}: ${actual} is NOT strict equal to ${expected}!`);
}
isEqual(mean(inputArr, inputArrLenght), 43900.6, "mean case 2");
isEqual(median(inputArr, inputArrLenght), 44627.5, "median case 2");
isEqual(mode(inputArr, inputArrLenght), 4978, "mode case 3");
