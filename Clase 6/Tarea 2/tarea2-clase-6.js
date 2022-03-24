/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let nodo = document.querySelector("body")
let contador = 0

document.querySelector("#boton-agregar").onclick = function(){

    contador++

    let nodoInput = document.createElement("div")
    let label = document.createElement("label")
    let input = document.createElement("input")

    nodo.appendChild(nodoInput)
    nodoInput.appendChild(label)
    nodoInput.appendChild(input)
    input.type = "Number"
    input.id = `input-familiar${contador}`
    label.id = `label-familiar${contador}`
    label.innerText = `Familiar${contador}`

    document.querySelector("#boton-quitar").disabled = false
    document.querySelector("#boton-calcular").disabled = false
}

document.querySelector("#boton-quitar").onclick = function(){

    let ultimoLabel = document.getElementById(`label-familiar${contador}`)
    let padreLabel = ultimoLabel.parentNode
    padreLabel.removeChild(ultimoLabel)

    let ultimoInput = document.getElementById(`input-familiar${contador}`)
    let padreInput = ultimoInput.parentNode
    padreInput.removeChild(ultimoInput)

    contador --

    document.querySelector("#boton-calcular").disabled = false

    if(contador === 0){
        document.querySelector("#boton-quitar").disabled = true
        document.querySelector("#boton-calcular").disabled = true
    }

    document.querySelector("#label-salario-promedio").innerText = "El promedio de salarios es: "
    document.querySelector("#label-mayor-salario").innerText = "El mayor salario anual es: "
    document.querySelector("#label-menor-salario").innerText = "El menor salario anual es: "
    
}

document.querySelector("#boton-calcular").onclick = function(){
    
    let arraySalarios=[]
    let salarios = document.querySelectorAll("input")
    
    for(let i=0; i < salarios.length; i++){
        if(salarios[i].value > 0){
            arraySalarios.push(Number(salarios[i].value))
        }
    }

    let contadorSalarios=0

    for(let i=0; i<arraySalarios.length; i++){
        contadorSalarios = arraySalarios[i] + contadorSalarios
    }
    let cantidadSalarios = arraySalarios.length
    let promedioSal = (contadorSalarios/cantidadSalarios)

    let salarioPromedio = document.querySelector("#label-salario-promedio")
    salarioPromedio.innerText = salarioPromedio.innerText + promedioSal

    arraySalarios.sort(function(a,b){
        return a - b
    })

    let mayorSalario = document.querySelector("#label-mayor-salario")
    mayorSalario.innerText = mayorSalario.innerText + arraySalarios[arraySalarios.length - 1]

    let menorSalario = document.querySelector("#label-menor-salario")
    menorSalario.innerText = menorSalario.innerText + arraySalarios[0]
    
    document.querySelector("#boton-calcular").disabled = true
}