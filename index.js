document.querySelector('form').addEventListener('submit', addToDo)

function addToDo(event) {
    event.preventDefault()
    const item = document.createElement('li')
    const input = document.querySelector('#item')
    item.innerText = input.value
    item.addEventListener('click', completeToDo)

    const button = document.createElement('button')
    button.innerText = 'X'
    button.addEventListener('click', removeToDo)
    item.append(button)

    const list = document.querySelector('ul')
    list.appendChild(item)
}
function removeToDo(event) {
    event.target.parentNode.remove()
}
function completeToDo(event) {
    if (event.target.getAttribute('aria-checked') !== 'true') {
        event.target.setAttribute('aria-checked', 'true')
    } else {
        event.target.setAttribute('aria-checked', 'false')
    }
    
}
