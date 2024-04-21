const difference = (a, b) => a - b;
const multiply = (a , b, c, d) => a * b * c * d;



// ------------>>single parameter or one parameter
const getAge = (person) => person.age;
const student = {
    name : 'anik',
    age : 24
}
const age = getAge(student);
console.log(age);



const getThird = numbers => numbers[2];
const arr = [11, 22, 54, 21, 11];
const thirdNumber = getThird(arr);
console.log(thirdNumber);


const doubleIt = num => num * 2;


// no parameter 

const pI = () => Math.PI;
console.log(pI());


// large arrow function. if you want to get anything returned from this function. than you have to use the return keyword

const doMath = (x, y, z) =>{
    const sum = x + y + z;
    const multiply = x * y * z;
    const ans = sum + multiply;
    return ans;
}

const result = doMath(10, 20, 30);
console.log(result);
