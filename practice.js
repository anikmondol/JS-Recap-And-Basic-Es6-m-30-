// --------->1.
const multiply = (a, b, c) => a * b * c;
// console.log(multiply(1, 2, 3));



// -------->2.
const sentence = `I am web developer
I love to code.
I love to eat biryani`;

// console.log(sentence);



// ------>3.

const arrowFunction = (a, b = 1) => {
    return a + b;
}

// console.log(arrowFunction(2));



// ------------>4.

const evenNumberOfFriends = (arr) => {
    let evenFriends = [];
    let oddFriends = [];
    for (const element of arr) {
        if (element.length % 2 === 0) {
            evenFriends.push(element)
        } else {
            oddFriends.push(element)
        }
    }

    const result = {
        first: evenFriends,
        second: oddFriends
    }
    return result;
}

// console.log(evenNumberOfFriends(['anik', 'ritu', 'arpon', 'apu']));




// ------------------>5.

const mixedFunction = (arr) => {
    let sum = 0;
    for (const element of arr) {
        const square = element * 2;
        sum += square;

    }
    const result = sum / arr.length;
    return result;
}


const array = [1, 2, 4];

// console.log(mixedFunction(array));

// ------------>6.

const findMax = (arr1, arr2) => {
    const sumOfTwoArray = [...arr1, ...arr2];
    // const max = Math.max(...sumOfTwoArray);
    // return max;
    const min = Math.min(...sumOfTwoArray);
    return min;
}

console.log(findMax([1, 100, 2, 3], [4, 5, 6]));



