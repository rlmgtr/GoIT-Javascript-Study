export function getBtn(selector) {
    return document.querySelector(selector);
}



export function enableBtn(button) {
button.disable = false
}


export function disableBtn(button) {

}

export function hideBtn(button) {
 button.classList.add("hidden") // calls style from css to hide a button
}


export function showBtn(button) {
    button.classList.remove("hidden")

}

// https://www.youtube.com/watch?v=-BGdePsfmkg&t=2873s 
// 1:13