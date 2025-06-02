// const remove = function removeFromArray (arr, value) {
//     return arr.filter(item => item !== value);
// };

function removeFromArray(arr, ...valuesToRemove) {
  return arr.filter(item => !valuesToRemove.includes(item));
}


console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
console.log(removeFromArray([1, 2, 2, 3], 2));
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
console.log((removeFromArray([1, 2, 3, 4], 7, 2)));
console.log((removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)));
console.log((removeFromArray([1, 2, 3], "1", 3)));
console.log((removeFromArray(["hey", 2, 3, "ho"], "hey", 3)));

// Do not edit below this line
module.exports = removeFromArray;
