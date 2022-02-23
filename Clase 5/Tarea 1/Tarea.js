document.querySelector('#botonCalcularSueldo').onclick = function(){

    const salarioAnual = Number(document.querySelector('#sueldoUsuario').value)
    const salarioMensual = calcularSalarioMensual(salarioAnual)
  
    document.querySelector('#salarioMensual').value = salarioMensual
  
    return false
  
  }
  
  calcularSalarioMensual = function($salarioAnual){
   return $salarioAnual / 12
  }