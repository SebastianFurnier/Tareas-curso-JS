//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector("#crear-input").onclick = function(){
    
    let cantidadClases = Number(prompt("cuantas clases desea agregar?"))

    for(let i=1; i <= cantidadClases; i++){

        let nodoPagina = document.querySelector("body")
        let nodoForm = document.createElement("form")
        let nodoInput = document.createElement("div")

        nodoPagina.appendChild(nodoForm)
        nodoForm.appendChild(nodoInput)
        let nuevoInputHoraClase = document.createElement("input")
        nodoInput.appendChild(nuevoInputHoraClase)
        let nuevoInputMinutoClase = document.createElement("input")
        nodoInput.appendChild(nuevoInputMinutoClase)
        let nuevoInputSegundoClase = document.createElement("input")
        nodoInput.appendChild(nuevoInputSegundoClase)
        
        nuevoInputHoraClase.type="number"
        nuevoInputHoraClase.placeholder=`Hora Clase ${i}`
        nuevoInputHoraClase.id=`horaClase${i}`

        nuevoInputMinutoClase.type="number"
        nuevoInputMinutoClase.placeholder=`Minuto Clase ${i}`
        nuevoInputMinutoClase.id=`minutoClase${i}`

        nuevoInputSegundoClase.type="number"
        nuevoInputSegundoClase.placeholder=`Segundo Clase ${i}`
        nuevoInputSegundoClase.id=`segundoClase${i}`
    }
    
    document.querySelector("#crear-input").disabled = true
}



document.querySelector("#sumar-tiempo-de-clases").onclick = function(){
    inputsIndividuales = 3

    let cantidadInputs = document.querySelectorAll("input").length
    cantidadInputs = cantidadInputs/inputsIndividuales

    let horasTotales = 0
    for(let i=1; i <= cantidadInputs; i++){ 
        let cantidadHoras = Number(document.getElementById(`horaClase${i}`).value)
        horasTotales = horasTotales + cantidadHoras
    }

    let minutosTotales = 0
    for(let i=1; i <= cantidadInputs; i++){ 
        let cantidadHoras = Number(document.getElementById(`minutoClase${i}`).value)
        minutosTotales = minutosTotales + cantidadHoras
    }

    let segundosTotales = 0
    for(let i=1; i <= cantidadInputs; i++){ 
        let cantidadHoras = Number(document.getElementById(`segundoClase${i}`).value)
        segundosTotales = segundosTotales + cantidadHoras
    }
    
    for(let i = 1; i < segundosTotales; i++){
        if(segundosTotales >= 60){ 
         segundosTotales = segundosTotales - 60
         minutosTotales = minutosTotales + 1
         }
    }

    for(let i = 1; i < minutosTotales; i++){
        if(minutosTotales >= 60){ 
            minutosTotales = minutosTotales - 60
            horasTotales = horasTotales + 1
         }
    }

    let nodoPagina = document.querySelector("body")
    let textoFinal = document.createElement("strong")
    nodoPagina.appendChild(textoFinal)
    
    textoFinal.textContent = `La cantidad de tiempo total de las clases es: ${horasTotales} horas, ${minutosTotales} minutos, ${segundosTotales} segundos`
    document.querySelector("#sumar-tiempo-de-clases").disabled = true
    
}