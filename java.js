const txtop1 = document.getElementById("op1")
const txtop2 = document.getElementById("op2")
const pResultado = document.getElementById("resultado")
const suma = document.getElementById("sumar")
const resta = document.getElementById("restar")
const multiplicacion = document.getElementById("multi")
const division = document.getElementById("div")

suma.addEventListener ("click",sumar )

function sumar(){
    const op1 = parseFloat (txtop1.value)
    const op2 = parseFloat (txtop2.value)
    let resultado = op1 + op2
    pResultado.innerText = resultado
}

resta.addEventListener("click", restar)

function restar(){
    const op1 = parseFloat(txtop1.value)
    const op2 = parseFloat(txtop2.value)

    let resultadoRestar = op1 - op2
    pResultado.innerText = resultadoRestar

}


division.addEventListener("click", div)

function div(){
    const op1 = parseFloat(txtop1.value)
    const op2 = parseFloat(txtop2.value)

    let resultadoDividir = op1 / op2
    pResultado.innerText = resultadoDividir
}

multiplicacion.addEventListener("click", multi)
 
function multi(){
    const op1 = parseFloat (txtop1.value)
    const op2 = parseFloat (txtop2.value)

    let resultadoMulti = op1 * op2
    pResultado.innerText = resultadoMulti
}
