const Base_URL = "https://66d7f5af37b1cadd8052cde0.mockapi.io/todos";

// get all todos
export const getToDo = () => {
    return fetch(Base_URL).then(res => res.JSON());
    
};

// add a to do 
export const addToDo = () => {};

// delete a to do 
export const deleteToDo = () => {};

// update a to do
export const updateToDo = () => {};