// function processData(input) {
//   //Enter your code here
//   data = input.split("\n");

//   const map = new Map();
//   var n = parseInt(data[0]);
//   for (var x = 0; x < n; x++) {
//     var line = data[x + 1];

//     var key = line.split(" ")[0];
//     var value = line.split(" ")[1];
//     map.set(key, value);
//   }
//   for (var x = 0; x < n; x++) {
//     var key = data[x + 1 + n];
//     if (map.get(key)) {
//       console.log(`${key}=${map.get(key)}`);
//     } else console.log("Not found");
//   }
// } //  4/5 test cases queries !=n

let array = input.split("\n");

//initilize the dictionary
let dictionary = [];

//for each array entry (except first one)
for (let x = 1; x < array.length; x++) {
  if (x <= array[0]) {
    //if the loop index is less than the number of dictionary entries, add to dictionary
    let temp = array[x].split(" ");
    dictionary[temp[0]] = temp[1];
  } else {
    //if the loop index is greater than the number of dictionary entries, lookup the dictionary value
    if (array[x] in dictionary) {
      //if the key exists in the dictionary, output it
      console.info(`${array[x]}=${dictionary[array[x]]}`);
    } else {
      //the key doesn't exist, print 'Not found'
      console.info("Not found");
    }
  }
}
