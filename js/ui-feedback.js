export function showloading(message="loading"){
    removeFeedBack()
    let div = document.createElement('div')
    div.className = "ui-feedback loading"
    div.textContent = message
    document.body.appendChild(div)
}

export function showError(message="Error"){
    removeFeedBack()
    let div = document.createElement('div')
    div.className = "ui-feedback error"
    div.textContent = message
    document.body.appendChild(div)
}


export function removeFeedBack(){
    document.querySelectorAll(".ui-feedback").forEach(el => el.remove());
}