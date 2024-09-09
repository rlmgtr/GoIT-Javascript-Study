const BASE_URL = "https://66d7f5af37b1cadd8052cde0.mockapi.io/todos";

// get all todos
export const getToDos = () => {
    return fetch(BASE_URL).then((res) => res.json());
    
};

// add a to do 
export const addToDo = (todo) => {
    
    fetch(BASE_URL, {
    method: "POST",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo), // should give "{'todoText': 'eat'}"
    });
};

// delete a to do 
export const deleteToDo = (id) => {
    return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",}); 
   
};

// update a to do
export const updateToDo = (id, status) => {
    fetch(`${BASE_URL}/${id}`, {
method: "PUT",
headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify({ isDone: !status }), 

    });
};