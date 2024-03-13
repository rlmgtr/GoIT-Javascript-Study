// Iterating array methods

// map

const fruits = ["apple", "orange", "banana"];

let fruitss = fruits.map((fruit) => fruit + " smoothie" );


console.log(fruitss);

// filter

const vegetables = ["onion","garlic","pepper"]; 
let vegFilter = vegetables.filter((veg) => veg !=="garlic" && veg !=="pepper"); // creates a new variable usually for arrow. If you want to filter two conditions, use logic gates

console.log(vegFilter); 

// filtering an array of objects:

const cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        color: "silver",
        mileage: 30000
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2018,
        color: "blue",
        mileage: 25000
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2019,
        color: "red",
        mileage: 15000
    }
];

// let carFilter = cars.filter ((carF) => console.log(carF.make));

let carFilter = cars.filter ((carF) => carF.make === "Ford");
console.log(carFilter);

 // go back at 1:01

