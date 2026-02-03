const display = document.querySelector('#display')
const add = document.querySelector('#adicionar1')
const sub = document.querySelector('#subtrair1')
const add5 = document.querySelector('#adicionar5')
const sub5 = document.querySelector('#subtrair5')

let n = 0

function atualizarDisplay(){
    display.textContent = n
}

add.addEventListener('click', () => {
    n++
    atualizarDisplay()
})

add5.addEventListener('click', () => {
    n += 5
    atualizarDisplay()
})

sub.addEventListener('click', () => {
    n--
    atualizarDisplay()
})

sub5.addEventListener('click', () => {
    n -= 5
    atualizarDisplay()
})

atualizarDisplay()