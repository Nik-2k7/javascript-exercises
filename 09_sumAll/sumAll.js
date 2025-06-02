
function sumAll(start, end) {
  // Handle edge cases: if inputs are not numbers or negative
  if (typeof start !== "number" || typeof end !== "number" || start < 0 || end < 0 || start%1 !== 0 || end%1 !== 0) {
    return "ERROR";
  }

  // Swap if start is greater than end
  if (start > end) {
    [start, end] = [end, start];
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}
console.log(sumAll(2, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(2.5, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));






// Do not edit below this line
module.exports = sumAll;
