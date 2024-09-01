const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "75bee3a37c9e4fe5b9a56aca9eda806e";

export function getNews(searchInput, resultPage) {
    const url = `${BASE_URL}?q=${searchInput}&pageSize=8&page=${resultPage}`;

return fetch( url, {

headers: {
    "X-Api-Key": API_KEY
}
}).then(res => res.json()).then(data =>{
return {data, nextPage: resultPage + 8};

});

}

export function resetPage() {
    return 5;
}
