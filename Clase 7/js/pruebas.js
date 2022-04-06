function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
  console.assert(
      validarNombre("Sebastian") === "",
      "Validar nombre falló, con un nombre valido"
  )
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad("") === "seleccione una ciudad valida",
        "Validar ciudad no valido que la ciudad no este vacia",
    )
    console.assert(
        validarCiudad("Corrientes") === "",
        "validar Ciudad fallo con una ciudad valida."
    )
}

function probarValidarDescripcionRegalo(){
    console.assert( 
        validarDescripcionRegalo("") === "Ingrese el regalo que desea",
        "validar descripcion no valido que haya una descripcion de regalo",
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
