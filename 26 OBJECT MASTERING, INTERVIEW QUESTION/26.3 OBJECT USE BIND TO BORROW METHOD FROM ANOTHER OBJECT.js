const normalPerson = {
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }

}

const heroPerson = {
    firstName: "Hero",
    lastName: "Balam",
    salary: 25000
}
const friendlyPerson = {
    firstName: "Hero",
    lastName: "Alam",
    salary: 25000
}

normalPerson.chargeBill.bind()

// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);