//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


let numeros = document.querySelectorAll('li')
let arrayNumeros = []

for(let i=0; i<numeros.length; i++){
    arrayNumeros.push(`${Number(numeros[i].innerText)}`)
}

document.querySelector("#calcular").onclick = function(){

    let contador = 0
    for(let i=0; i<arrayNumeros.length; i++){
        contador = (contador + Number(arrayNumeros[i]))
    }
    contador = contador/arrayNumeros.length
    let promedio = document.querySelector("#promedio")
    promedio.textContent = promedio.textContent + contador

    //Esta función la busque en el MDN
    arrayNumeros.sort(function(a, b) {
        return a - b
      })

    let numeroPequenio = document.querySelector("#numeroPequenio")
    numeroPequenio.innerText = numeroPequenio.innerText + arrayNumeros[0]

    let numeroGrande = document.querySelector("#numeroGrande")
    numeroGrande.innerText = numeroGrande.innerText + arrayNumeros[arrayNumeros.length - 1]

    
    document.querySelector("#calcular").disabled = true
}
