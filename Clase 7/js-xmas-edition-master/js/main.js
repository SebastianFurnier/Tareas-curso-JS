
const nombre = document.formulario.nombre.value
let ciudad = document.formulario.ciudad.value
const comportamiento = document.formulario.comportamiento.value
const descripcionRegalo = document.formulario["descripcion-regalo"].value


function validarNombre(nombre){
    if(nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter"
    }else if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres"
    }else if (/^[A-z]+$/.test(nombre) === false){
        return "El nombre debe contener solo letras"
    }else{
        return ''
    } 
}

function validarCiudad(ciudad){
    if(ciudad === ""){
        return "Este campo debe ser seleccionado"
    }else{
        return ''
    }
}

function validarDescripcion(descripcionRegalo){
    if(descripcionRegalo.length >= 100){
        return "La descripcion no debe tener mas de 100 caracteres"
    }
    
    if(descripcionRegalo.length === 0){
        return "La descripcion no debe estar vacia"
    }else{
        return ""
    }
}

function validarFormulario(event){
    const $form = document.querySelector("#carta-a-santa")
    const nombre = $form.nombre.value
    const ciudad = $form.ciudad.value
    const descripcionRegalo = $form["descripcion-regalo"].value

    const errorNombre = validarNombre(nombre)
    const errorCiudad = validarCiudad(ciudad)
    const errorDescripcionRegalo = validarDescripcion(descripcionRegalo)


    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

    const esExito = manejarErrores(errores) === 0

    if(esExito){
        $form.className = 'oculto'
        document.querySelector('#exito').className = ''
    }


    event.preventDefault()
}

function manejarErrores(errores){ 
    
    borrarNodoError()
    

    const llaves = Object.keys(errores)
    const $errores = document.querySelector('#errores')

    // const nodoListaErrores = document.querySelector('#errores')
    // let nodoError = document.querySelectorAll('#nodoError')

    // if(nodoError.length>0){
    //     for(i=0; i<=nodoError.length; i++){
    //         nodoListaErrores.removeChild(nodoError[i])
    //     }
    // }

    let cantidadErrores = 0 
    
    llaves.forEach(function(llave){
        const error = errores[llave]

        if(error){
            cantidadErrores++
            $form[llave].className = "error"
            const $error = document.createElement('li')
            $error.id = "nodoError"
            $error.innerText = error
            $errores.appendChild($error)
        }else{
            $form[llave].className = ''

            redireccionAlista()
        }
    })
    // errorNombre = errores.nombre
    // errorCiudad = errores.ciudad
    // errorDescripcionRegalo = errores.descripcion

    // if(errorNombre){
    //     $form.nombre.className = "error"
    // }else{
    //     $form.nombre.className = ""
    // }

    // if(errorCiudad){
    //     $form.ciudad.className = "error"
    // }else{
    //     $form.ciudad.className = ""
    // }

    // if(errorDescripcionRegalo){
    //     $form['descripcion-regalo'].className = "error"
    // }else{
    //     $form['descripcion-regalo'].className = ""
    // }
    
    return cantidadErrores
}

function redireccionAlista(){
    timeoutID = window.setTimeout(redireccionFuncion, 5000)
}

function redireccionFuncion(){
    window.location = 'wishlist.html'
}

function borrarNodoError(){
    const nodoListaErrores = document.querySelector('#errores')

    while(nodoListaErrores.hasChildNodes()){
        nodoListaErrores.removeChild(nodoListaErrores.firstChild)
    }
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;

