/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
let cantidadFamiliares = document.querySelector("#cantidad-familiares")
let nodo = document.querySelector("body")
let nodoContenedor = document.querySelector('#contenedor')
let botonSiguiente = document.querySelector('#boton-siguiente')
let botonResetear = document.querySelector("#boton-resetear")

botonResetear.onclick = resetearFormulario
botonSiguiente.onclick = comprobarInput

function comprobarInput(){
    if(cantidadFamiliares.value < 1 || cantidadFamiliares.value === ''){
        alert('Ingrese una cantidad valida')
    }else{
        crearInputFamiliares()
    }
}

function crearInputFamiliares(){
    nodoContenedor.style.display = ''
    for(let i=1; i<=Number(cantidadFamiliares.value); i++){

        let label = document.createElement("label")
        let nodoInput = document.createElement("div")
        nodoInput.id = 'familiar'
        let input = document.createElement("input")

        nodoContenedor.appendChild(nodoInput)
        nodoInput.appendChild(label)
        nodoInput.appendChild(input)

        label.innerText = `Edad del integrante ${i}: `
        input.type = "number"
        input.className = "entrada"

        document.querySelector("#boton-siguiente").disabled = true
    }
    
    let botonCalcular = document.createElement("button")
    nodoContenedor.appendChild(botonCalcular)
    botonCalcular.id = "boton-calcular"
    botonCalcular.innerText = "Calcular"

    botonResetear.disabled = false
    botonResetear.className = 'btn btn-primary'


    let valorEdades = document.getElementsByClassName("entrada")
    document.querySelector("#boton-calcular").onclick = function(){

        let arrayEdades=[]

        for(let i=0; i<valorEdades.length; i++){
            arrayEdades.push(Number(valorEdades[i].value))
        }

        let sumaEdades = 0
        let cantidadEdades = arrayEdades.length
        for(let i=0; i<arrayEdades.length; i++){
            sumaEdades = sumaEdades + arrayEdades[i]
        }
        let promedio = sumaEdades/cantidadEdades
        let edadPromedio = document.createElement("strong")
        let nodoPromedio = document.createElement("div")
        nodoPromedio.id = 'promedio-edad'
        nodoContenedor.appendChild(nodoPromedio)
        nodoPromedio.appendChild(edadPromedio)
        edadPromedio.innerText = "El promedio de edad es: "
        edadPromedio.textContent = edadPromedio.textContent + Number(promedio)


        arrayEdades.sort(function(a, b){
        return a - b
        })
        console.log(arrayEdades)


        let mayorEdad = document.createElement("strong")
        let nodoMayor = document.createElement("div")
        nodoMayor.id = 'mayor-edad'
        nodoContenedor.appendChild(nodoMayor)
        nodoMayor.appendChild(mayorEdad)
        mayorEdad.innerText = "La mayor edad es: "
        mayorEdad.textContent = mayorEdad.textContent + arrayEdades[arrayEdades.length - 1]

        let menorEdad = document.createElement("strong")
        let nodoMenor = document.createElement("div")
        nodoMenor.id = 'menor-edad'
        nodoContenedor.appendChild(nodoMenor)
        nodoMenor.appendChild(menorEdad)
        menorEdad.innerText = "La menor edad es: "
        menorEdad.textContent = menorEdad.textContent + arrayEdades[0]

        document.querySelector("#boton-calcular").disabled = true
    }
}


function resetearFormulario(){
    let nodoInput = document.querySelectorAll("#familiar")
    let botonCalcular = document.querySelector('#boton-calcular')

    for(let i=0; i<nodoInput.length; i++){
        nodoContenedor.removeChild(nodoInput[i])
    }
    nodoContenedor.removeChild(botonCalcular)
    document.querySelector("#cantidad-familiares").value = ""
    document.querySelector("#boton-siguiente").disabled = false
    let menorEdad = document.querySelector('#menor-edad')
    let mayorEdad = document.querySelector('#mayor-edad')
    let promedioEdad = document.querySelector('#promedio-edad')
    if(menorEdad != null){
        nodoContenedor.removeChild(menorEdad)
    }
    if(mayorEdad != null){
        nodoContenedor.removeChild(mayorEdad)
    }
    if(promedioEdad != null){
        nodoContenedor.removeChild(promedioEdad)
    }
    botonResetear.disabled = true
    nodoContenedor.style.display = 'none'
}