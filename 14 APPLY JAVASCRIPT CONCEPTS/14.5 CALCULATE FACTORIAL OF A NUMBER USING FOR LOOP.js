// function factorial(n) {
//   var factorial = 1;
//   for (var i = 1; i <= n; i++) {
//     factorial = factorial * i;

//   }
//   return factorial;
// }
// var result = factorial(6);
// console.log(result);

// 3! = 1x2x3
// 4! = 1x2x3X4
// 5! = 1x2x3X4X5
// 10! = 1x2x3X4X5X6X7X8X9X10

// var factorial = 1;

// for (var i = 1; i <= 50; i++) {
//   factorial = factorial * i;
//   console.log(i, factorial);
// }

function factorial(num) {
  var factorial = 1;
  for (var i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
var result = factorial(10);
console.log(result);
