let heading = document.getElementById("heading");
// console.log(heading);

heading.style.color = "blue";


let headers = document.getElementsByClassName('header');
// console.log(headers); will give you an array
headers[0].style.color = "red";
headers[1].style.color = "red";
headers[2].style.color = "red";

for (let i = 0; i = headers.length; i++){
    headers[i].style.color = "red";
}