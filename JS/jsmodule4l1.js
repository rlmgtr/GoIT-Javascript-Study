// NORMAL FUNCTION ------------
function  greet(name) {
console.log (`Welcome, ${name}`) // back ticks for ${}
};


function hey (name) {
   console.log (`what's up ${name}`)
};


// console.log(greet("Poly"));

// CALLBACK FUNCTION ---------
function registerMember (name, callback) {
 console.log(`Regestering new member ${name}`);
 callback(name); // calls a parameter outside 
};

registerMember("Poly", hey); // allows a function to be a parameter. With two prior fucntion given prior, you can choose which one will be recognized by callback 



// INLINE CALL BACK ------------- 

let btn = document.getElementById('btn');
btn.addEventListener("click", function () { 
   alert ("hello world");
}); // simply adding the funtion within the code. 

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", sayHello); // this is not inline, for the opposite reason that the called function is not WITHIN the syntax. Same concept of inline CSS LOL

function sayHello() {
alert ("hello world 2");
};


// SEVERAL CALLBACK -----------------
function processCall (receipient, onAvailable, onNotAvailable) {
const isRecipientAvailable = Math.random() > 0.5; // Math.random generates a number from 0.1 to 0.99

if (!isRecipientAvailable) {
   onNotAvailable() 
}
onAvailable();
}

function takeCall (name) {
console.log(`connecting you to ${name}, please wait...`)
}

function ActivateAnsweringMachine (name) {
console.log(`The attendan ${name} is not available, please leave a message`)  
}


processCall("Poly", takeCall, ActivateAnsweringMachine);





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