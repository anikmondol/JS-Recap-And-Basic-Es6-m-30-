// for of use on array or string not in object

// for in use on object


const numbers = [1, 2, 8, 4, 6];

// for(let i = 0; i < numbers.length; i++){

// }

// while


for(let num of numbers){
    // console.log(num);
}

const owner = "programmingHero";
for(let chester of owner){
    // console.log(chester);
}


// -------------------

const actor = {
    name : 'Ananata',
    age : 30,
    phone : '013434535545',
    money : 1121643264
}


for(const key in actor){
    // console.log(key, actor[key]);
}


// ------------------> optional


const keys = Object.keys(actor);
for(const key of keys){
    console.log(key, actor[key]);
}