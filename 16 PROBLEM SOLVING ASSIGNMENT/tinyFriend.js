function tinyFriend(name) {
  var tiny = name[0];
  for (var i = 0; i < name.length; i++) {
    var currentName = name[i];

    if (currentName.length < tiny.length) {
      tiny = currentName;
    }
  }
  return tiny;
}
var tinyName = tinyFriend(["a","najmul", "nomanff", "riyad", "mon", "nl"]);
console.log(tinyName);

// function biggestNumber(numbers) {
//   var largest = numbers[0];
//   for (var i = 0; i < numbers.length; i++) {
//     var currentNumber = numbers[i];
//     if (currentNumber > largest) {
//       largest = currentNumber;
//     }
//   }
//   return largest;
// }
// var largestNumber = biggestNumber(["najmul", "noman", "asdg", "asd", "as"]);
// console.log(largestNumber);
// //[10, 20, 30, 40, 50, 60, 70, 80, 90,100]
