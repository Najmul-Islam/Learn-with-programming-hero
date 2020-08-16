function brickCalcutor(floor) {
  if (floor <= 10) {
    var brick = floor * 15 * 1000;
  } else if (floor <= 20) {
    var floor = floor - 10;
    var brick = floor * 12 * 1000 + 10 * 15 * 1000;
  } else if (floor > 20) {
    var floor = floor - 20;
    var brick = floor * 10 * 1000 + 10 * 12 * 1000 + 10 * 15 * 1000;
  } else {
    console.log("Enter valid number");
  }

  return brick;
}

var result = brickCalcutor();
console.log(result);
