//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

document.querySelector('#botonCalcularSueldo').onclick = function(){

    const salarioAnual = Number(document.querySelector('#sueldoUsuario').value)
    const salarioMensual = calcularSalarioMensual(salarioAnual)
  
    document.querySelector('#salarioMensual').value = salarioMensual
  
    return false
  
  }
  
  calcularSalarioMensual = function($salarioAnual){
   return $salarioAnual / 12
  }