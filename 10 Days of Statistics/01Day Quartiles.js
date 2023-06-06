const median = (arr, arrLength) => {
    console.log("median arr", arr)
    console.log("median arrLength", arrLength)
  let result =
    arrLength % 2
      ? arr[((arrLength +1) / 2)-1]
      : (arr[arrLength / 2 - 1] + arr[arrLength / 2]) / 2;
  return result;
};

function quartiles(arr) {
    arr.sort((a, b) => a - b);
    // Write your code here
    let q1 = median (arr.slice(0, arr.length/2), Math.floor(arr.length/2));
    let q2 = median (arr, arr.length);
    let start2 = arr.length%2==0?arr.length/2:arr.length/2+1;
    let q3 = median (arr.slice(start2, arr.length), Math.floor(arr.length/2));;
 return [q1, q2 , q3]
} // dirty code