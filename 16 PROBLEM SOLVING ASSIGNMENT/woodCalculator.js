function woodCalculator(chair, table, bed) {
  var chair = chair * 1;
  var table = table * 3;
  var bed = bed * 5;
  var total = chair + table + bed;

  return total;
}
var totalWood = woodCalculator(14, 2, 12);
console.log(totalWood);
