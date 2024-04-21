// default ----> if value is not provided, take this as a default

function add(num1 = 99, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}


// const sum = add(5, 7);
// const sum = add(5);
// const sum = add();



function fullName(firstName, lastName = ''){
    const full = `${firstName} ${lastName}`;
    return full;
}

// console.log(fullName('anik', 'Mondal'));



function friends(numbs = []){

}




function person(human ={}){
    
}