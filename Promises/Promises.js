

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




fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=> res.json()) // decode the json source (from online mostly) to a normal json data
.then((data)=>console.log(data)) // execute the data - display usually
.catch((error)=> console.log(error)) // if data is not gathered
.finally((console.log('ADS here'))) // action whether successful of not 

// continue at 1:12