// async & await - are just syntactic sugar on handling promises

fetch(URL)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.error(e));

// with async await it helps us type our code in synchronous way

async function getData() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}


// https://www.youtube.com/watch?v=56BGgrVolkA&t=3894s
// review async await at 1:50
