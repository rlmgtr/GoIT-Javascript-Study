import { getNews, resetPage } from "./news-api.js";
import { getBtn, enableBtn, disableBtn, hideBtn, showBtn } from "./loadMoreBtn.js";

const newsForm = document.getElementById("newsForm");
const newsDisplay = document.getElementById("newsDisplay");
const loadMoreBtn = getBtn("#loadMoreBtn");

hideBtn(loadMoreBtn);
newsForm.addEventListener('submit', processSubmit);

function processSubmit(e) {
    e.preventDefault();
    clearNewsList();
    const form = e.target;
    const searchInput = newsForm.newsInput.value.trim();
    const nextPage = resetPage();

    fetchNews(searchInput, nextPage).then(() => {
        loadMoreBtn.dataset.page = nextPage + 1;
    })
    showBtn(loadMoreBtn);
}

function fetchNews(searchInput, resultPage) {
    disableBtn(loadMoreBtn);
    return getNews(searchInput, resultPage).then(({ data, nextPage }) => {
        const { articles } = data;

        if (articles.length === 0) {
            onError();
            hideBtn(loadMoreBtn)
            return;
        }

        articles.forEach(article => {
            const markup = createMarkUp(article);
            updateNewsList(markup);
            
        });

        enableBtn(loadMoreBtn, nextPage);
    }).catch(error => {
        console.error('Error fetching news:', error);
        onError();
    });
}

function createMarkUp({author, title, description, url, urlToImage}) {
    return `
<div class="article-card">
    <h2 class="article-title">${title}</h2>
    <h3>${author}</h3>
    <img class="articleImg" src="${urlToImage}" alt="Article image">
    <p>${description}</p>
    <a href="${url}" target="_blank">Read more</a>
</div>
`;
}

function clearNewsList() {
    newsDisplay.innerHTML = "";
}

function updateNewsList(markup) {
    newsDisplay.insertAdjacentHTML("beforeend", markup);
}

function onError() {
    updateNewsList("<p>No Articles Found</p>");
}

function handleLoadMore() {
    const newsInput = newsForm.newsInput.value.trim();
    const nextPage = parseInt(loadMoreBtn.dataset.page, 10);
    fetchNews(newsInput, nextPage).then(() => {
        nextPage += 1;
        loadMoreBtn.dataset.page = nextPage;
    })
}



loadMoreBtn.addEventListener("click", handleLoadMore);