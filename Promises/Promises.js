

let testPromise = new Promise ((resolve, reject) => {
let value = 7;
setTimeout(() => {
value = value + 3


if (value === 10) {
    resolve("This is enough");
} else { 
    reject("This is NOT enough"); }

},1000);

})

console.log(testPromise);

// Promise has 3 states
// 1. Pending
// 2. Fulfilled
// 3. Rejected