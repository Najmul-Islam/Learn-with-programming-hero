// const year = 3688;
// let remainder = year % 4;
// if (remainder == 0){
//     console.log('Your year is a Leap Year');
// }else{
//     console.log('Your year is nbot a Leap Year');
// }
// function isLeapYear(year){
//     let remainder =year % 4;
//     if(remainder == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const check2000

// const year = 3998;
// let reminder = year % 4;

// if (reminder == 0) {
//   console.log("Your year is a Leap Year");
// } else {
//   console.log("Your year is not a Leap Year");
// }
// function leapYear(year) {
//   const reminder = year % 4;
//   if (reminder == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const check = leapYear(2000);
// console.log(check);

var year = 2000;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("This Year is Leap Year");
    } else {
      console.log("This year is not Leap Year");
    }
  } else {
    console.log("This year is Leap Year");
  }
} else {
  console.log("This year is not Leap Year");
}
