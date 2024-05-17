// learn how to read documentation

let cars = document.querySelectorAll("li");

/* this is linear time
cars.forEach ((car) => {
    car.addEventListener("click", (e) => {
        alert(e.target.innerText + " is clicked");
    });
}); */

// this is constant time


// this is event deligation
let fruits = document.querySelector("#fruits");

fruits.addEventListener("click" , (e) => {
    if (e.target.tagName === "LI") {
        alert("You clicked " + e.target.innerText);
    }
});


// The runningsum
// input 3 
// 1 + 2 + 3 = 6 // output 6


// typical
function runningSumVer1 (num1) {
    let sum = 0;

    for (let i = 1; i <= num1; i++) {
        sum += i;
    }
}

return sum;

// efficient / optimized
function runningSumVer2 (num2) {
    (num2 * (num2 *1 )) / 2
}


// Go back for bubling and half it !!!