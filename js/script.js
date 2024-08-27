const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "75bee3a37c9e4fe5b9a56aca9eda806e";

function getNews(searchQuery, queryPage) {
    const url = `${BASE_URL}?q=${searchQuery}&pageSize=5&page${queryPage}`;


};