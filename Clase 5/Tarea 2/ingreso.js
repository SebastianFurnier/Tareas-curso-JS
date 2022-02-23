


document.querySelector('#Ingresar').onclick = function(){
    const primerNombre = document.querySelector('#primerNombreUsuario').value
    const segundoNombre = document.querySelector('#segundoNombreUsuario').value
    const apellidoUsuario = document.querySelector('#apellidoUsuario').value
    const edadUsuario = document.querySelector('#edadUsuario').value

    let titulo = document.querySelector("h1")
    titulo.textContent = "Bienvenido " + primerNombre

    const nodoPagina = document.querySelector('body')
    const nuevoTexto = document.createElement('p')
    nodoPagina.appendChild(nuevoTexto)


    if (edadUsuario === "" ){ 
    nuevoTexto.textContent = primerNombre + " " + segundoNombre + " " + apellidoUsuario
    return false

} else{
    nuevoTexto.textContent = primerNombre + " " + segundoNombre + " " + apellidoUsuario + ", " + edadUsuario + " años"
    return false


}   
}
