// var student = {id:121, phone:17456, name:"Abir"};
// var student2 = {id:131, phone:4567, name:"Mahi"};

// var phonePropName = "phone";
// var phoneNo1 = student.phone;
// var phoneNo2 = student["phone"];
// var phoneNo3 = student[phonePropName];
// //update phone no.
// student2.phone = 545432

// console.log(phoneNo1);
// console.log(student2);

// var student = { id: 121, phone: 1234567, name: "Abir" };
// var student2 = { id: 131, phone: 3454567, name: "Mahi" };

// var phonePropName = "phone"
// var phoneNo = student.phone;

// console.log(phoneNo);
// console.log(student2);

// var fees = {};
// fees["Rahul"] = 100;
// //fees["total"] = function () {
//   return 100 + 200;
// };
// fees.total = function () {
//   return 100 + 200;
// };

// console.log(fees.total());

// var fees = {
//   Rahul: 100,
//   Sumit: 200,
//   Rohan: 300,
//   "Super Man": 400,
// };

// console.log(fees["Super Man"]);

var fees = {
  Rahul: 100,
  total: function () {
    return 100 + 200;
  },
};

fees.total();
console.log(fees["total"]());
