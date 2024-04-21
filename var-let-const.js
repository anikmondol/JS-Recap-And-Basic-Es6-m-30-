// var : no reason to use var 
// let : allow it to reassign
// const : do not allow it to reassign


const money = 25;
// money = 50;
const rich = money + 25;
// console.log(rich);


let count = 0;
count += 10;
// console.log(count);


const numbers = [12, 22, 32, 55];
// numbers = [44, 55, 88];
// numbers[1] = 3321;
numbers.push(11, 22, 33, 44)
// console.log(numbers);




// objects 
const student = {
    name : "moyna pakhi",
    class : 12
}

student.name = "anik";

// console.log(student);


let sum = 0;

for(let i = 1; i <= 10; i++){
    sum += i;
}

console.log(sum);