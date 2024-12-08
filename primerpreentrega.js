function esPrimo(numero) {
    if (numero <= 1) {
        alert("ingrese un numero mayor a 1");
        return false;  // Los números menores o iguales a 1 no son primos
    }
    
    //verificar divisibilidad hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;  // Si encuentra un divisor, no es primo
        }
    }

    return true;  // Si no tiene divisores, es primo
}

// El usuario ingresa un número
let numeroUsuario = parseInt(prompt("Ingresa un número para verificar si es primo:"));

// Verificamos si el número ingresado es válido
if (isNaN(numeroUsuario)) {
    alert("Por favor ingresa un número válido.");
} else {
    // Llamamos a la función para verificar si es primo
    if (esPrimo(numeroUsuario)) {
        alert("¡El número " + numeroUsuario + " es primo!");
    } else {
        alert("El número " + numeroUsuario + " no es primo.");
    }
}