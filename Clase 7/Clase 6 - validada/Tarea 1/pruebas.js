function probarValidarCantidadFamiliares(){
    console.assert(
        validarCantidadFamiliares('') === 'Ingrese una cantidad valida',
        'Validar cantidad de familiares fallo al validar con una cantidad vacia'
    )

    console.assert(
        validarCantidadFamiliares(0) === 'La cantidad de familiares debe ser mayor a 0',
        'Validar cantidad de familiares fallo al validar que la cantidad sea mayor a 0'
    )

    console.assert(
        validarCantidadFamiliares(1) === '',
        'Validar cantidad de familiares fallo al validar con una cantidad correcta'
    )
}

probarValidarCantidadFamiliares()