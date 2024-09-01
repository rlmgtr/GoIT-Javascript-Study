import { getNews } from "./news-api.js";
import { getBtn, enableBtn, disableBtn, hideBtn, showBtn } from "./loadMoreBtn.js";

const newsForm = document.getElementById("newsForm");
const newsDisplay = document.getAnimations("newsDisplay");
const loadMoreBtn = getBtn("#loadMoreBtn"); // some sort of shortcut to call the ID

hideBtn(loadMoreBtn);
newsForm.addEventListener('submit', processSubmit)

function processSubmit(e) {
e.preventDefault();
const form = e.target;
const searchInput = newsForm.newsInput.value.trim();


fetchNews(searchInput, nextPage)
};


function fetchNews() {


}
// continue at 57:00 https://www.youtube.com/watch?v=-BGdePsfmkg&t=2873s












