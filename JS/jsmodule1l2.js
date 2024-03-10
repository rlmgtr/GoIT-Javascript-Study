// flowchart is one of the essential part od this lesson

// syntax for if else statement 

/* 
 if (condition) {
    code block - -f condition is true, this code syntax will be executed
} else { otherwise, the else code will be executed. 
 - this is useful for 1 condition, and there will be an aleternative action if the condition was not met.
}
*/

// remember: to execute a function, aside from console.log, you can also call the function itself. 

let status = "with missing"; 

if (status == "clear") {
    console.log("you may proceed");
} else {
    console.log("please stop");
}

// Global scope

let x = 35;

if (true) {
    console.log("This is the block scope - within the syntax", x)
 }

 console.log("This is the global scope - outside the sytax", x)

// this is if non - Global 

if (true) { let y = 35; console.log("This is within, non - global", y) 
}

console.log("the value of y will not appear here since the var is not global")

// use if - else if if the condition is more than 2 Pattern: if, else if, else if, else ...

let color = "green";

if (color === "red") { 
    console.log("STOP");
} else if (color === "yellow") {
    console.log("slow down, prepare to stop");
} else if (color === "green") {
    console.log("GO");
}
// take note that you can access JS in runtime page if you have node.js installed

// Logical operators and && / or || / not ! - take note that all these thre can give either true or false. 

// and &&

let isUsername = true;
let isPassword = true;

if (isUsername && isPassword) {console.log("welcome to your profile")

} else {
 console.log("username or password is incorrect")
}

// or ||

let username = true;
let password = false;

if (username || password ) { console.log ("either the username or password is correct")
} else {
    console.log ("both username and password are wrong");
}

// not !

let regular = true;

if (!regular) {console.log("welcome to the control page, admin")

} else { 
    console.log("you are not an admin, you cannot access this page")
}

// the syntax above shows that if the user account is not set as admin, they cannot procced. Hence, the not ! operator simply does the logic : if you are an admin, you can go, if not, you cannot - while the given variable is confirming "is this user an admin?"

// SWITCH case: 
/* switch (value){
    case value: 
    code block to execute
    case value: 
    code block to execute
    case value: 
    code block to execute
    default:
        code to execute if cases are false
}
See working sample below: 
*/

let month = 2
switch (month) {
    case 1: 
    console.log("this month is January"); break;
    case 2: 
    console.log("this month is February"); break;
    case 3: 
    console.log("this month is March"); break;
    default: 
    console.log("April - December");
}

// For loop - allows a process to keep on executing until a specific condition is met. 

/* 
for(statement 1, statement 2, statement 3) {
    CODE TO EXECUTE
}
// Refereces: Statements are also set of conditions
// For example; declare a variable, declare a condition, and declare a procedure until condition is met. These three should be separated by a semicolon. ; 
- at somepoint, it is like - don't stop until... 
++ means +1
-- means -1
*/

for (let a = 1; a <= 5; a++) {
    console.log("for loop test")
}

// While loop
/* 
while(condition) {
    CODE TO EXCECUTE- consist of: 
    process and;
    condition to make the while statement false
}

Add a terminating condition to a stop to the code execution - do this by adding variable and a condition. in a sense, it will keep on running when the condition is TRUE and will only FALSE if false. If the condition will start as false, it will simply not execute the code. 
*/ 

let f = 5; 
while (f < 50) { console.log("this is the while loop");
 f += 5;
}

/* Do while

do { code to run

} while ( condition )

the condition will run once if the condition is false (while loop)
*/

let w = 100
do { console.log("this is do while loop")

} while (false)

