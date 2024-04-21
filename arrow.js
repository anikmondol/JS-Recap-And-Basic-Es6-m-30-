// ------> function declaration

// function add(a, b){
//     const result = a + b;
//     return result;
// }

function add(a, b){
    return a + b;
}

const sum = add(5, 90);
// console.log(sum);



//------> function expression

const add1 = function (a, b){
    return a + b;
}

// console.log(add1(10, 20));



//------> arrow function 

const add2 = (a, b) => a + b;
// console.log(add2(5, 2));

const add4 = (a, b, c, d) => a + b + c + d;
// console.log(add4(4, 5, 6, 7));

const multiply = (num1,  num2) => num1 * num2;

console.log(multiply(2, 2));


