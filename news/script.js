import { getNews } from "./news-api.js";

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
    })
    .then(updateNewsList)
    .catch(onError)
    .finally(() => form.reset());
}

function createMarkup ({author, title, description, url, urlToImage}) {

return `
<div class='article-card'>
<h2 class='article-title'>${title}<h2>
<h3 class='article author'>${author}</h3>
<img src="${urlToImage}" class='articleImg'/>
<p class='article-description>${description}</p>
<a href="${url}" class='articleLink'>Read more</a>
</div>
`;
} 

function updateNewsList (markup) {
    document.getElementById('newsDisplay').innerHTML = markup;
}

function onError() {
    updateNewsList("<p>Sorry, no articles found under that keyword</p> ");
}
 



