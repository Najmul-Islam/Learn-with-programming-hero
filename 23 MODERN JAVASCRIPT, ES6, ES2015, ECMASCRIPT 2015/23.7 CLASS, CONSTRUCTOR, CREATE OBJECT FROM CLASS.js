class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
    }
}

const student1 = new Student(12, "Shovo");
const student2 = new Student(12, "Mahi");
console.log(student1, student2);