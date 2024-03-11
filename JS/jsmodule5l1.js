// FUNCTION EXECUTION CONTEXT

/* const johnnyBravo = {
    username: "johnnyB", 
    displayName() {
     console.log(johnnyBravo.username);
    },
};
johnnyBravo.displayName(); */

const johnnyBravo = {
    username: "johnnyB", 
    displayName() {
     console.log(this.username); // compared to the code above, this syntax used this to address the object as "his" 
    },
};
johnnyBravo.displayName(); 

const bookShelf = {
book: "the writer",
authors: [ "John SMith", "Ben Williams"],
displayAuthors (){
    console.log(this.)
},

}