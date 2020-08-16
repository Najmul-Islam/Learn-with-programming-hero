//var numbers = [45, 81, 63, 98, 35, 23, 44, 33];

// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   var element = numbers[i];
//   sum = sum + element;
// }
// console.log("total of the numbers:", sum);

function getArraySum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

var numbers = [45, 81, 63, 98, 35, 23, 44, 33];
var result = getArraySum(numbers);
console.log("total of the numbers:", result);
