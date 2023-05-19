let input = "10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060";
let n = input.split("\n")[0];
let x = input.split("\n")[1].split(" ");
x = x.map((x) => Number(x));
x = x.sort((a, b) => a - b);
console.log(x.reduce((pre, cur) => cur + pre, 0) / n);
console.log(n % 2 ? x[(n + 1) / 2] : (x[n / 2 - 1] + x[n / 2]) / 2);
const mode = (arr) => {
  const mode = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < x.length; i++) {
    const item = x[i];

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
console.log(mode(x));
