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



// INLINE CALL BACK

// SEVERAL CALLBACK

// REPETITION ABSTRACTION

// FOREACH METHOD

// ARROW FUNCTIONS

// CODE TYPES