function factorial(num) {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
var result = factorial(5);
console.log(result);

function factorialRecursive(num) {
  if (num == 1) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
}
var result2 = factorialRecursive(5);
console.log(result2);
