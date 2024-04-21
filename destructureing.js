const actor = {
    name : 'Ananata',
    age : 30,
    phone : '013434535545',
    money : 1121643264
}
// const phone = actor.phone;


//---------> if right side is an object left side of destructuring will be objects as will
// --------> use property name as a variable that contains the property value


const {name, age:boyos, phone, money} = actor;



// console.log(phone);
// console.log(money);
// console.log(boyos);



// -------------->array destructuring.

const numbers = [10, 30];
const [a, b] = numbers;
const [x, y] = [60, 50];



// ---------->advanced

function doubleThem(a, b){
    return [a * 2, b * 2];
}

const [first, second] = doubleThem(2, 3);
console.log(first, second);

