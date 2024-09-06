import { addToDo, deleteToDo, updateToDo, getToDo } from "./api.js";

const addToDoBtn = document.getElementById("addToDoBtn")

const myUL = document.getElementById("myUL")

const toDoInput = document.getElementById("toDoInput")

let CurrentID = 1;

function createLi(toDoText,isDone, id ) {
let li = document.getElementById("li") // creates an li
li.innerText = toDoText; // <li>code<li> injetcs the input
li.dataset.id = id; // <li data-id="1">code</li>
myUL.appendChild(li)

if (isDone) li.classname = "checked"; // write a css for this
};



function fillTodoList() {
    getToDo().then((toDos) => {
       toDos.forEach(({ toDoText, isDone, id }) => createLi(toDos.toDoText, toDos.isDone, toDos.id));
    });
}

window.addEventListener("DOMContentLoaded", fillTodoList);













// https://www.youtube.com/watch?v=56BGgrVolkA&t=3894s
// 47:52