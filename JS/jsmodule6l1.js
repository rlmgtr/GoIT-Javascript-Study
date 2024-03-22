

let heading = document.getElementById("heading");
// console.log(heading);

heading.style.color = "blue";
// ID is for single elements

/* let headers = document.getElementsByClassName('header');
// console.log(headers); will give you an array
headers[0].style.color = "red";
headers[1].style.color = "red";
headers[2].style.color = "red"; 

for (let i = 0; i = headers.length; i++){
    headers[i].style.color = "red";
} */

// above can use for and for of

// class is for multiple similar elements, but adding a function will not be similar to class in CSS, but LOOPS must be applied in such instances. See above for example. * take note that this happens because classes are viewed by js as an array. 

// querySelector can only target one even there are many classes:

let headingID = document.querySelector('#heading') 
let headersQ = document.querySelectorAll('.header') // for ID - gives nodelist
let headersC = document.getElementsByClassName('header'); // class for class gives html collection
console.log(headersQ);
console.log(headersC);

// html is a LIVE collection while node is STATIC

let addVeg = document.getElementById('addVeg');
let vegs = document.getElementById('vegs');
let allvegs =document.querySelectorAll('veg');

addVeg.onclick = function() {
let li = document.createElement("li");
li.innerText = "eggplant";
li.className = "veg";
vegs.appendChild(li);
console.log(vegs);
};

// comparison between getElementsByClassname is good if you are going to target and add further functions in your target elemets; while querySelectorAll is good for just targeting an element. 

let progs = ["JS", "Phyton", "react"];
let ul = document.createElement("ul");
let progcon = document.getElementById("progcon");

for ( let prog of progs) {
    let li = document.createElement("li");
    li.innerText = prog;
    ul.appendChild(li);
}

progcon.append(ul);





