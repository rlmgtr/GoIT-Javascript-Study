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
    }).catch(console.error());
    
}

window.addEventListener("DOMContentLoaded", fillTodoList);



// https://www.youtube.com/watch?v=56BGgrVolkA&t=3894s
// 50:









// https://www.youtube.com/watch?v=56BGgrVolkA&t=3894s
// 47:52