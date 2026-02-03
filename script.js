const display = document.querySelector('#display')
const add = document.querySelector('#adicionar1')
const sub = document.querySelector('#subtrair1')
const add5 = document.querySelector('#adicionar5')
const sub5 = document.querySelector('#subtrair5')

let n = 0

add.addEventListener('click', adicionar)

add5.addEventListener('click', adicionar5)

sub.addEventListener('click', subtrair)

sub5.addEventListener('click', subtrair5)

function adicionar(){
    n++
    display.innerHTML = '<p>'+n+'</p>'
}

function adicionar5(){
    n += 5
    display.innerHTML = '<p>'+n+'</p>'
}

function subtrair(){
    n--
    display.innerHTML = '<p>'+n+'</p>'
}

function subtrair5(){
    n -= 5
    display.innerHTML = '<p>'+n+'</p>'
}