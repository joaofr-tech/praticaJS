const input = document.querySelector('input')
const btn10 = document.querySelector('#btn10')
const btn15 = document.querySelector('#btn15')
const btn20 = document.querySelector('#btn20')
const display = document.querySelector('#mostrar')

function calcularGorjeta(porcentagem){
    const valorConta = parseFloat(input.value)
    const gorjeta = valorConta * (porcentagem/100)
    const total = valorConta + gorjeta
    
    display.innerHTML = `
        <p> Valor com Gorjeta: R$ ${total.toFixed(2)} </p>
    `
}

btn10.addEventListener('click', () => calcularGorjeta(10))
btn15.addEventListener('click', () => calcularGorjeta(15))
btn20.addEventListener('click', () => calcularGorjeta(20))