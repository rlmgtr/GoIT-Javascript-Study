import { addToDo, deleteToDo, updateToDo, getToDos } from "../js/api.js";

const addToDoBtn = document.getElementById("addToDoBtn");

const myUL = document.getElementById("myUL");

const toDoInput = document.getElementById("toDoInput");

let CurrentID = 1;

function createLi(toDoText,isDone = false, id = CurrentID) {
let li = document.createElement("li"); // creates an li
li.innerText = toDoText; // <li>code<li> injetcs the input
li.dataset.id = id; // <li data-id="1">code</li>
myUL.appendChild(li);

if(isDone) li.classname = "checked"; // write a css for this
};



function fillTodoList() {
    getToDos().then((toDos) => {
       toDos.forEach(({ toDoText, isDone, id }) => createLi( toDoText, isDone, id));
    }).then((toDos) => {
        CurrentID = parseInt(toDos[toDos.lenght - 1].id) + 1
    })
    .catch(console.error());
    
};

addToDoBtn.addEventListener("click", (e) => {
    e.preventDefault;
    let toDO = toDoInput.value.trim();
    
    if(toDo === "") { 
        alert("Cannot add a blank entry");
        return;
    }
});






window.addEventListener("DOMContentLoaded", fillTodoList);

// https://www.youtube.com/watch?v=56BGgrVolkA&t=3894s
// 55

