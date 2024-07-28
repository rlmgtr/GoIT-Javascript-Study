import { getNews } from "./news-api.js";

let newsForm = document.getElementById("newsForm");

newsForm.addEventListener('submit', exeSubmit);

function exeSubmit(e) {
    e.preventDefault();

    let form = e.target; 
    const topic = form.elements.newsInput.value;


    getNews(topic).then((data) => console.log(data));
}

// resume at 1:28
 

