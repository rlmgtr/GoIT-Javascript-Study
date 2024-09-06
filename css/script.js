import { addToDo, deleteToDo, updateToDo, getToDo } from "./api";

const addToDoBtn = document.getElementById("addToDoBtn")

const myUL = documen.getElementById("myUL")

const toDoInput = documen.getElementById("toDoInput")

letCurrentID = 1;

function createLi(toDoText,isDone, id ) {
let li = document.getElementById("li") // creates an li
li.innerText = text; // <li>code<li> injetcs the input
li.dataset.id = id; // <li data-id="1">code</li>
myUL.appendChild(li)

if (isDone) li.classname = "checked"; // write a css for this

};



function fillTodoList() {
    getToDo().then(toDos => {
       toDos.forEach(({toDoText, isDone, id}) => createLi(toDoText, isDone, id));
    });
}











// https://www.youtube.com/watch?v=56BGgrVolkA&t=3894s
// 47:52