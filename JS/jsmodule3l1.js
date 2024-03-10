

// objects
/*
object = {

object inside object; {    
},
object inside object; {

}
*/


let Batman = {
navigatorame: "Bruce Wayne",
alias: "Dark Knight",
weath: 200,
power: false,
1: "batarang", 
2: "martial arts",
tech: {
land: "batmobile",
air: "batplane",
weapon: "utility belt",
},
beatVillains: function () {
    console.log("I am the Batman")
},

};

// calling an object is case sensitive

console.log(Batman.name); // dot notation, object.propery to call
console.log(Batman["1"]); // square notation - uses square bracker because if the property is listed as a special character or number, the dot notation may confuse the IDE

console.log(Batman.tech.land); // calling an object inside an object dot method
console.log(Batman["tech"]["land"]); // square method

// Adding / updating property 

Batman.age=40;
Batman.tech.guns=false;
console.log(Batman);

// updating

Batman.tech.air= "batjet";

console.log(Batman)

// Ojbect method and function
// method is a function inside the object

console.log(Batman.beatVillains);
// or
Batman.beatVillains();

// this keyword - incorporated function, used to point out the details that should display. See sample below: 

anddroidPhone= { 
    
    Brand: "Samsung",
    color: "black",
    ram: "8gb",
    storage: 256,
    marketDetails: {
        Price: 20000,
        stocks: "over 10000",
        stores: "nationwide",
    },
    showspecs: function () {
        console.log(this.ram, this.storage);
    }, 

    showmarket: function () {
        console.log(this.marketDetails);
    }    
}

// use this the way a function is called

anddroidPhone.showmarket();
anddroidPhone.showspecs();

console.log(this); // shows what we have in the browser, particularly if this is outside the object. 

// short hand object properties - name and value are same. 

/* Spongebob = {

    bob, 
    bobby,
    

} */

// Iteration - in array, we use for loop / for of loop
// for in loop - object. / for of loop - arrays

const phoneTwo = { 
color: "black",
size: "6 inches",
Screen: "Gorilla case",
Model: "2024 Series",
}

for (let key in phoneTwo) {
    console.log(phoneTwo.key)
}
 // Review this further

// hasOwnProperty - true / false
// phoneTwo.hasOwnProperty('color')

console.log(phoneTwo.hasOwnProperty('color'))

// Object entries / Object.keys
// Object values / Object.value


for (let key in phoneTwo) {
    console.log(key + ": " +phoneTwo[key])
}

const vegetables = {
potatoes: 2, 
tomatoes: 4,
cabbages: 6,
carrots: 8,
};

let total = 0;

let veggies = Object.values(vegetables); // bts, this will turn to array [2, 4, 6, 8]

for (let veg of veggies ) {
    console.log("vegeta"); 
} // shows how many items are inside the object

for (let veg of veggies) {
total += veg;
}
console.log(total);

// object.entries - shows the property entries to appear

const vegEntries = Object.entries(vegetables); // write a new const and apply the Object.entries to the desired object
console.log(vegEntries); // call the new const

// results will return as array
 





