const display = document.querySelector('#display')
const add = document.querySelector('#adicionar1')
const sub = document.querySelector('#subtrair1')

let n = 0

add.addEventListener('click', adicionar)

sub.addEventListener('click', subtrair)

function adicionar(){
    n++
    display.innerHTML = '<p>'+n+'</p>'
}

function subtrair(){
    n--
    display.innerHTML = '<p>'+n+'</p>'
}