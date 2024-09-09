import { addToDo, deleteToDo, updateToDo, getToDos } from "../js/api.js";

const addToDoBtn = document.getElementById("addToDoBtn");

const myUL = document.getElementById("myUL");

const toDoInput = document.getElementById("toDoInput");

let CurrentID = 1;


function addCloseBtn(li) {
    let span = document.createElement('button');
    let txt = document.createTextNode("Delete");
    span.className  = "closeBtn";
    span.appendChild(txt);
    li.appendChild(span);
}

function createLi(toDoText,isDone = false, id = CurrentID) {
let li = document.createElement("li"); // creates an li
li.innerText = toDoText; // <li>code<li> injetcs the input
li.dataset.id = id; // <li data-id="1">code</li>
li.classList.add("toDo-item");
myUL.appendChild(li);

if(isDone) li.classname = "checked"; // write a css for this
addCloseBtn(li);
}; 



function fillTodoList() {
    getToDos().then((toDos) => {
       toDos.forEach(({ toDoText, isDone, id }) => createLi( toDoText, isDone, id));
       return toDos;     
    }).then((toDos) => {
        CurrentID = parseInt(toDos[toDos.length - 1].id) + 1;
    });
    
};

addToDoBtn.addEventListener("click", ()  => {
    let toDo = toDoInput.value.trim();
    
    if(toDo === "") { 
        alert("Cannot add a blank entry");
        return;
    }

    let toDoObject = {
        toDoText: toDo,
    };
    addToDo(toDoObject);
    createLi(toDo);
});

myUL.addEventListener("click", (e) => {
if (e.target.tagName === "LI") {
    updateToDo(e.target.dataset.id, e.target.classList.contains("checked"));
    e.target.classList.toggle("checked");
}

if (e.target.getAttribute("class") === "closeBtn") {
if (confirm ("are you sure you want to delete this to do?")) {
    deleteToDo(e.target.parentElement.getAttribute("data-id"));
e.target.parentNode.remove();
}

}

});




window.addEventListener("DOMContentLoaded", fillTodoList);

// https://www.youtube.com/watch?v=56BGgrVolkA&t=3894s
// Review 1:15 for future reference - the question was about the alternative is the POST method caught an error


