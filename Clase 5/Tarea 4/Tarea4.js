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

    arrayNumeros.sort(function(a, b) {
        return a - b
      })

    let numeroPequenio = document.querySelector("#numeroPequenio")
    numeroPequenio.innerText = numeroPequenio.innerText + arrayNumeros[0]

    let numeroGrande = document.querySelector("#numeroGrande")
    let final = arrayNumeros.length
    numeroGrande.innerText = numeroGrande.innerText + arrayNumeros[final - 1]

    
}
