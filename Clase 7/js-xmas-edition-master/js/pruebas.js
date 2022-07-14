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
    validarNombre(
        '1') ===
        "El nombre debe contener solo letras",
        "Validar nombre no valido que el nombre tenga solo letras",
    )
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad("") === "Este campo debe ser seleccionado",
        "Validar nombre no valido que la ciudad este seleccionada"
    )
}

function probarValidarDescripcion(){
    console.assert(
        validarDescripcion("") === "La descripcion no debe estar vacia",
        "Validar descripcion no valido que la descripcion no sea vacia."
    )

    console.assert("assssssssssssssssssssssssssssssssffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffgggggggggggggggggggggggggggggggggggggsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss") === "La descripcion no debe tener mas de 100 caracteres",
    "Validar ciudad no valido que tenga menos de 100 caracteres"

    console.assert("Buenos Aires") === "",
    "Validar ciudad no funciono con un nombre correcto"
}

probarValidarDescripcion();
probarValidarCiudad();
probarValidarNombre();
