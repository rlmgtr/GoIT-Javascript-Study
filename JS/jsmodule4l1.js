// NORMAL FUNCTION ------------
function  greet(name) {
console.log (`Welcome, ${name}`) // back ticks for ${}
};

// console.log(greet("Poly"));

// CALLBACK FUNCTION ---------
function registerMember (name, callback) {
 console.log(`Regestering new member ${name}`);
 callback(name); // calls a parameter outside 
};

registerMember("Poly", greet); // allows a function to be a parameter. 



// INLINE CALL BACK ------------- 



// SEVERAL CALLBACK -----------------
// Math.random() - genrates a random number from 0.1 to 0.99 
// if else is not necessary


// REPETITION ABSTRACTION -------------
// from the word itself, a function  taht repeats a procedure given that it has condition on when to stop / until when


 function repeatPost(num) {if (n <= 0 ) return console.log("Supply value, at least 1"); for (let i = 0; i <= 5; i++) {
    console.log(i);
 }
}

repeatPost(2);
repeatPost(3);
repeatPost(4);




// FOREACH METHOD

// ARROW FUNCTIONS

// CODE TYPES