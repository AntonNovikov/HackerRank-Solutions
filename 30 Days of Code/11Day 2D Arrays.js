let arr = Array(6);

for (let i = 0; i < 6; i++) {
  arr[i] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
}
var sumarr = [];

var h = 0;
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    sumarr[h] =
      arr[i][j] +
      arr[i][j + 1] +
      arr[i][j + 2] +
      arr[i + 1][j + 1] +
      arr[i + 2][j] +
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2];
    h++;
  }
}

sumarr.sort((a, b) => b - a);

console.log(sumarr[0]);
