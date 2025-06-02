const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  return Math.round(celsius * 10) / 10;
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));

const convertToFahrenheit = function(celsius) {
  const fahrenheit = ((9/5)*celsius + 32) ;
  return Math.round(fahrenheit * 10) / 10
};
console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(73.2));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
