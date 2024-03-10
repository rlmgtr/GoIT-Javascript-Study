// How to create and Array 
/* 
name of the array = []
 */

let fruits = ["apple", "banana", "mango"]

// how to access an array

console.log(fruits[1])

// In arrays, you start counting in 0 - hence, the first in the list is zero. This is called INDEX POSITION / INDEX

console.log(fruits.length) // 3 - this is used to get the number of items in the array

console.log(fruits.length-1) // 2 - this is how you can get the index value. (0, 1, 2)

// 2D array - Array within an array

let foods = [
     ["marinara", "pizza", "lasagna"],
     ["Burger", "fries", "coke"],
     ["Adobo", "siningang", "kaldereta"],
];
console.log(foods[2][2]);  // Observe the array, arrays are separated by commas and still written iside a bracket. - this can also work in 3D arrays and so on...

// Array iteration

const marvelHeroes = [
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Hawkeye",
    "Spider-Man",
    "Black Panther",
    "Captain Marvel",
    "Doctor Strange",
    "Scarlet Witch",
    "Ant-Man",
    "Wasp",
    "Winter Soldier",
    "Falcon",
    "Vision",
    "War Machine",
    "Star-Lord",
    "Gamora",
    "Groot"
  ];

  // Loop iteration
   for (let mvh = 0; mvh < 3; mvh++) {
    console.log(marvelHeroes[mvh]);
   }

 // This is now a passby reference works - changes you make on the original array or variable will also apply to the copy varibale with the value of the said variable. See syntax below
   
   const dcHeroes = [
    "Superman",
    "Batman",
    "Wonder Woman",
    "The Flash"
  ];


  let dch = dcHeroes
  console.log(dch) // will show 4 heroes

  dcHeroes.push("Aquaman")

  console.log(marvelHeroes)
  console.log(dch) // will now show 5 heroes

  // push and pop
  // push - add an item at the end of the list
  // pop - remove and item at the end of the list 
   
const appliances = ["fridge", "TV", "Stove", "Oven"]

appliances.push("AC");
console.log(appliances);
appliances.pop()
console.log(appliances)


// unshift and shift
// unshift - adds an item at the beginning of the list
// shift - remove the first item in the list

appliances.unshift("fan");
console.log(appliances);
appliances.shift();
console.log(appliances);

// indexOf - will show the index position of the item being searched for

console.log(appliances.indexOf('fridge'))
console.log(appliances.indexOf('ref')) // returns -1 if the item is not part of the list


// slice - displays , splice, deletes.

// slice(start, finish) indicates which items will be remove from the list by means of range - simply, (start, how many), but last item will not be included. 

//console.log(appliances.slice(1, 3));

// splice - same counting logic of slice - but this funtion deletes (start, how many from index position)
// splice can also be use in removing and adding (practically, replacing items in the list)

appliances.splice(2, 2, "app1","app2");

console.log(appliances);



// split() - split arrays. What's inside () will be recognized to be the separator of the said array
// join - combines all items on the list to make a string
// reverse - reverse the lists of array - Take note: only works in ARRAY

let anime = 'hello Dragon Ball GT'

console.log(anime.split(""));
console.log(anime.);

// Practice palindrome identifier

//getMin - get the least amount in the array
//getMax - get the max amount of number in the array



