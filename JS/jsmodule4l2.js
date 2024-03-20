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
console.log(carFilter); // parameters = first: itemname, item index num, all of list

 // For , for of , for in, for each loops
 // there is an include function. includes.number for example
// when programming, you always start creating the namee of the actual ID (I am talking about var, let, const, function etc. then write the code for it so you can call that ID)

// Find and includes

const foods = ["adobo", "kaldereta", "tinola na manok", "tinola na pato", "tinola"];

let foodfind = foods.find((food1) => food1 === "tinola");
let foodfilter = foods.filter((food2) => food2 === "tinola");
let foodincludes = foods.includes((food3) => food3 === "tinola");

console.log(foodfind);
console.log(foodfilter);
console.log(foodincludes);
foodincludes();

/* let foodfinds = function () {
    console.log(foods.includes("tinola"));
};
foodfinds(); // true

// filter: shows the items with the said description, includes: true or false, find: just the exact ID */

// for sorting, if inside the object, choose an key and syntax should be : (a.keyname - b.keyname), vice versa

// map, returns multiple array based on the number of result
// flatmap , all results are put together in one array
// sort reverse to reverse alphabtical 