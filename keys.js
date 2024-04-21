const glass = {
    name : 'glass',
    color : 'golden',
    price : 12,
    isCleaned : true
}



// -------> all property name
// console.log(Object.keys(glass));
// [ 'name', 'color', 'price', 'isCleaned' ]


// all property values
// console.log(Object.values(glass));
// [ 'glass', 'golden', 12, true ]


// console.log(Object.entries(glass));
// ----> array of array, two dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]




// ---------->deleted keys and value
// delete glass.isCleaned;
const {isCleaned, ...other} = glass;
// console.log(glass);
// console.log(other);


// freeze
// Object.freeze(glass);
glass.source = "Bangladesh";
// console.log(glass);



// seal

Object.seal(glass);
glass.price = 100;
console.log(glass);
