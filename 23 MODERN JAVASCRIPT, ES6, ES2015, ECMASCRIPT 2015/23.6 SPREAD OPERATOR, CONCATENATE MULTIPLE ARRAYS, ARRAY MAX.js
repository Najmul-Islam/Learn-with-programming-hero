const ages = [12, 14, 15, 16, 17];
const ages2 = [15, 17, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2, ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
//console.log(allAges2);

const busi = 100;
const minis = 200;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
//const maximum = Math.max(busi, minis, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);