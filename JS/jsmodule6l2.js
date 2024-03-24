let btnn = document.getElementById("btnn");
/*
btnn.addEventListener("click", function(){
    console.log("hello world");
});
*/
// above shows a sample code using event listener



btnn.addEventListener("click", function(event){
    console.log(event); // details of the event
    console.log(event.target); // the actual html syntax
    console.log(event.target.innerText); // will show the text in the button - 
    console.log(event.target.getAtttribute("id")); // will show the ID name - btnn
    console.log(event.type); // will show click

});

// btn.onlick and btn('click', fucntion). onlick is limited to click action white the later will let you change it depending on your design - hover etc. 

// above showing event function which gives details of the event by default and elment

let logInForm = document.getElementById("logInForm");

logInForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value; 
    let password = document.getElementById("password").value;
    console.log(username, password); 


    let user = {
        username: "user",
        password: "pass",
    }

if (username === user.username && password === user.password) {
    alert ("Logging in... Please wait.");
 } else {alert("Incorrect username or password. Please try again");
 }
} );




// .// value allows the data added in the input bpx to be gathered. 
// e.preventDefault - prevent the page from reloading when submitting a form (since reloading is default)