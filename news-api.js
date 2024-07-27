const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "75bee3a37c9e4fe5b9a56aca9eda806e";

function getNews(newsQ) { 
fetch(`${BASE_URL}?q${newsQ}&apiKey=${API_KEY }`).then((res) => {

    if (!res.okay)


});
     
}

// continue at 1:21