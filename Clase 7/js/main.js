const nombre = document.formulario.nombre.value;
const ciudad = document.formulario.ciudad.value;
const descripcion = document.formulario["descripcion-regalo"].value;

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
  return ""
  
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "seleccione una ciudad valida";
  }
  return ""
}

function validarDescripcionRegalo(descripcion) {
  if (descripcion.length === 0) {
    return "Ingrese el regalo que desea";
  }
  if(descripcion.length > 100){
    return "La descripcion no debe tener mas de 100 caracteres"
  }
  return ""
}

validarNombre(nombre);
validarCiudad(ciudad);
validarDescripcionRegalo(descripcion)