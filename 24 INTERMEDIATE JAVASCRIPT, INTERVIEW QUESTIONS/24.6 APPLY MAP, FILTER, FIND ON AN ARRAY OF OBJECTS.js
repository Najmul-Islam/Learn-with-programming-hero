const student = [
    { id: 21, name: "Omar Sunney" },
    { id: 32, name: "Mannna" },
    { id: 41, name: "Moyouri" },
    { id: 51, name: "Deepjol" },
];
const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40);
const biggerOne = student.find(s => s.id > 40);
console.log(biggerOne);
