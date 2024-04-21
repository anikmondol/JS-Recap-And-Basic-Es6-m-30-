const max = Math.max(11, 22, 55, 12);
// console.log(max);


const numbers = [11, 74, 54, 65, 88, 40, 25];
const arrMax = Math.max(...numbers);
// console.log(arrMax);

const arrMin = Math.min(...numbers);
// console.log(arrMin);


// ----> use spread operator to copy

const numS = [4, 5, 87, 9];
const numS1 = [...numS]; // copy
numS1.push(41);

console.log(numS);
console.log(numS1);


//---->>advanced

const sonkha = [...numS, 'anik']; // and add extra elements while copy
console.log(sonkha);

