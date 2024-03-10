// SPREAD OPERATOR - 
// Math.max - resturns the highest number in a given list. Samples: 
const numbers = [2, 4, 6, 8, 10];
console.log(Math.max(...numbers)); // the ... spread operator spreads the contents so that the Math.max will work.

// ... operator only works in array / list and object
// it is not a pass by reference, or value. ... simply spreads the values.

let personThree = {
    name: "Juan Santos",
    age: 31, 
    address: "Bulacan",
};

personThree = { ...personThree}; // add the ... operator first prior to console log
console.log(personThree);
personThree = { ...personThree, occupation: "none"}; // adding key and value
console.log(personThree);

// REST OPERATOR (...) - used in function

function sayGreetings(salutation, name, ...position) {
 console.log ("Mr", "Andress", "Bulacan", "Mayor", "twoterms");
 const [province, rank, terms] = position; // Array destructuring 
 console.log(province);
}

sayGreetings("Mr", "Andress", "Bulacan", "Mayor", "twoterms");

// REMEMBER - Parameters and arguments should have the same order. Example: if if parameter says (age, address), argument should say (30, Bataan)

// Array destructuring - calling the item inside the ...rest. Create variables according to the number of items inside the ...rest. (apply basic logic to determine the variable names. )


// Object destructuring //

let truck = {
make: "peterbuilt",
type: "ten wheeler",
use: "cargo",
color: "red",
details: {
 year: 2020,
 license: "six",
 category: "heavt duty",
},
};

console.log()

let {make, type} = truck; // this syntax allows you to just simply enter the key to get the value instead of (sample) truck.make syntax
console.log(make);
console.log(type);

// observe above how the values are called

type = "twelve wheeler"; // it will not change the type inside the object. but the updated key will show its updated value when called individually, logically, the updated key became a new var

console.log(truck); 

console.log(type);


