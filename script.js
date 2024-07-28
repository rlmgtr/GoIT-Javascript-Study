pimport { getNews } from "./news-api.js";

let newsForm = document.getElementById("newsForm");

newsForm.addEventListener('submit', exeSubmit);

function exeSubmit(e) {
    e.preventDefault();

    let form = e.target; 
    const topic = form.elements.newsInput.value;


    getNews(topic).then((data) => {
 const { articles } = data;

 if (articles.lenght === 0) throw new Error("sorry, No articles found");

 return articles.map(createMarkup);
    });
}

function createMarkup ({author, title, description, url, urlToImage}) {

return `
<div class='article-card'>
<h2 class='article-title'><h2>
<h3 class='article author'></h3>
<img />
<p class='article-description></p>
<a>Read more</a>
</div>
`;

function updateNewsList () {
    document.getElementById('newsDisplay')
}


function onError


} 
 

