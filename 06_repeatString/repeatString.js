// const repeatString = function() {
    
// };
// const repeatString = function(str, times) {
//   return str.repeat(times);
//   if (times<0) {
//     return "ERROR" ;
    
//   }
// };
const repeatString = function(str, times) {
  if (times < 0) {
    return "ERROR";
  }
  // else if (str === '') {
  //   return '';
  // }
  let result = '';
  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
};


// const repeat = repeatString('bye', 0);
// console.log(repeat); // Output: "heyheyhey"

// function repeatString(str, num) {
//   let result = '';
//   for (let i = 0; i < num; i++) {
//     result += str;
//   }
//   return result;
// };

// const repeatString = function (str, num) {
//   // return str.repeat(num);
//   if (num<0) {
//         return "ERROR";    
//   }
//   for (let i = 0; i < num; i++) {
//     // const element = array[i];
//    let string = "";
//   for (let i = 0; i < num; i++) {
//     string += word;
//   }
//   return string;
//   }
// };
const repeats = repeatString('hi', -1);
console.log(repeats);

const repeatss = repeatString('', 10);
console.log(repeatss);




// Do not edit below this line
module.exports = repeatString;
