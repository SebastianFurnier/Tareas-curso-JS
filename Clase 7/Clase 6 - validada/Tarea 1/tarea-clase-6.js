/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function validarFormulario(){
    const numeroFamiliares = document.querySelector("#cantidad-familiares") 
    const esExito = validarCantidadFamiliares(numeroFamiliares.value) === ''

    const objError = {
        errorInput: validarCantidadFamiliares(numeroFamiliares.value)
    }

    if(esExito){
        const nodoError = document.querySelector('#errores')
        nodoError.style = 'display: none'
        edadFamiliares()
    }else{
        const nodoError = document.querySelector('#errores')
        const llaveError = Object.keys(objError)

        nodoError.style = ''
        for(i=0; i< llaveError.length; i++){
            console.log(llaveError[i])
            nodoError.innerText = objError.llaveError[i];
        }
        
    }
}

function validarCantidadFamiliares(cantidadFamiliares){
    if(cantidadFamiliares === ''){
        return 'Ingrese una cantidad valida'
    }else if(cantidadFamiliares < 1){
        return 'La cantidad de familiares debe ser mayor a 0'
    }else{
        return ''
    }
}


function edadFamiliares(){
    const cantidadFamiliares = document.querySelector("#cantidad-familiares")

    for(let i=1; i<=Number(cantidadFamiliares.value); i++){

        let label = document.createElement("label")
        let nodoInput = document.createElement("div")
        let input = document.createElement("input")

        nodo.appendChild(nodoInput)
        nodoInput.appendChild(label)
        nodoInput.appendChild(input)

        label.innerText = `Edad del integrante ${i}: `
        input.type = "number"
        input.className = "entrada"

        document.querySelector("#boton-siguiente").disabled = true
    }
    
    let botonCalcular = document.createElement("button")
    nodo.appendChild(botonCalcular)
    botonCalcular.id = "boton-calcular"
    botonCalcular.innerText = "Calcular"

    let botonResetear = document.createElement("button")
    nodo.appendChild(botonResetear)
    botonResetear.id = "boton-resetear"
    botonResetear.innerText = "resetear"


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
        nodo.appendChild(nodoPromedio)
        nodoPromedio.appendChild(edadPromedio)
        edadPromedio.innerText = "El promedio de edad es: "
        edadPromedio.textContent = edadPromedio.textContent + Number(promedio)


        arrayEdades.sort(function(a, b){
        return a - b
        })
        console.log(arrayEdades)


        let mayorEdad = document.createElement("strong")
        let nodoMayor = document.createElement("div")
        nodo.appendChild(nodoMayor)
        nodoMayor.appendChild(mayorEdad)
        mayorEdad.innerText = "La mayor edad es: "
        mayorEdad.textContent = mayorEdad.textContent + arrayEdades[arrayEdades.length - 1]

        let menorEdad = document.createElement("strong")
        let nodoMenor = document.createElement("div")
        nodo.appendChild(nodoMenor)
        nodoMenor.appendChild(menorEdad)
        menorEdad.innerText = "La menor edad es: "
        menorEdad.textContent = menorEdad.textContent + arrayEdades[0]

        document.querySelector("#boton-calcular").disabled = true
    }

    document.querySelector("#boton-resetear").onclick = function(){
        
        let nodoPadre = document.querySelector("body")
        let nodoInput = document.querySelectorAll("div")
        for(let i=0; i<nodoInput.length; i++){
            nodoPadre.removeChild(nodoInput[i])
        }
        nodoPadre.removeChild(botonCalcular)
        nodoPadre.removeChild(botonResetear)
        document.querySelector("#cantidad-familiares").value = ""
        document.querySelector("#boton-siguiente").disabled = false
    }
}


let nodo = document.querySelector("body")

document.querySelector("#boton-siguiente").onclick = validarFormulario