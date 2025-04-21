function calcularFactorial() {
    let numero;
    
    // Solicitar el número hasta que se ingrese un valor válido
    while (true) {
        const input = prompt("Ingrese un número para calcular su factorial:");
        
        // Intentar convertir el input a número
        numero = Number(input);
        
        // Validar si es un número válido y entero no negativo
        if (isNaN(numero)) {
            console.log("Error: Debe ingresar un número válido.");
        } else if (!Number.isInteger(numero) || numero < 0) {
            console.log("Error: Debe ingresar un número entero no negativo.");
        } else {
            break;
        }
    }
    
    // Calcular el factorial
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    
    // Mostrar el resultado en consola
    console.log(`El factorial de ${numero} es ${factorial}`);
    
    return factorial;
}

// Llamar a la función para iniciar el programa
calcularFactorial();