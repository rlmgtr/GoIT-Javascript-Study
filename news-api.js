const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "75bee3a37c9e4fe5b9a56aca9eda806e";

export function getNews(newsQ) {
    return fetch(`${BASE_URL}?q=${newsQ}&apiKey=${API_KEY}`).then((res) => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    }).catch(error => {
        console.error("Error fetching the news:", error);
        throw error;  // Re-throw the error after logging it
    }); 
}
