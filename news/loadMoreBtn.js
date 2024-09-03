export function getBtn(selector) {
    return document.querySelector(selector);
}



export function enableBtn(button, nextPage) {
button.disabled = false;
button.textContent = "Load more"
button.dataset.page = nextPage
}


export function disableBtn(button) {
    button.disabled = true;
    button.textContent = "Loading . . ."
}

export function hideBtn(button) {
 button.classList.add("hidden") // calls style from css to hide a button
}


export function showBtn(button) {
    button.classList.remove("hidden")

}

