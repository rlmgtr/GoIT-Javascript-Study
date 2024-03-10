let a = 10
let b = 20

/* 
function scanner() {
 Add your code here
} 

scanner() - this is how you call a function, just write its name. You can put parameters (or can ve vars inside the ())
*/


function adder() {
 console.log("the sum of a and b is", a + b)
}

adder();


n1= 20;
n2= 30;

function multiply() {
    console.log("the product is", n1*n2)
};

multiply()


// You can intergrate function in different logics such as withdrawal / ATM function

let balance = 100;
let amount = 50;

function atMachine(balance, amount) {
    if ( balance > amount ) { console.log("processing, please wait...")
    return;
    } else { console.log("you're broke, man.")

    };
}

atMachine(balance, amount)

// the return function breaks the process if first criteria is not met so that the machine will not waste resources. Conceptually, if req 1 is not met, the system will no longer proceed to check req 2, 3, and so on...

// expression function needs space between function name and parameters (parenthesis). As observed, a variable / const can also be a function.



const subtract = function subt (bnum, snum) {
    console.log("the answer is", bnum - snum);
}

subtract(10, 8);

// rememebr to not put the operation inside the parenthesis, rather put it inside the curly bracket

// to be better in JS, practice pseudo code and then have it translated in computer syntax - a great tip from teacher Radh. 
