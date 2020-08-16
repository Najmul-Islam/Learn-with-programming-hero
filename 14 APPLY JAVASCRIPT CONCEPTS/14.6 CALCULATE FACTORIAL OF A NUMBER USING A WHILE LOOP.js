// function factorial (n){
//     var i =1;
//     var factorial = 1;
//     while (i <=n ){
//         factorial = factorial *i;
//         i++;
//     }
//     return factorial;
// }
// var result = factorial (10);
// console.log(result)

// var i = 1;
// var factorial = 1;
// while (i <= 10) {
//   factorial = factorial * i;
//   //console.log(i, factorial);
//   i++;
// }
// console.log(factorial);

function factorial(n) {
  var i = 1;
  var fact = 1;
  while (i <= n) {
    fact = fact * i;
    i++;
  }
  return fact;
}
var result = factorial(10);
console.log(result);
