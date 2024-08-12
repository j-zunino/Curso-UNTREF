// Ejercicio 8
// Obtener el resto de la división entera a%b de dos números enteros positivos mediante restas.

const prompt = require('prompt-sync')();

let dividendo = parseInt(prompt('Ingrese el dividendo: '));
const divisor = parseInt(prompt('Ingrese el divisor: '));

console.log(`Dividendo: ${dividendo}, divisor: ${divisor}.`);

if (isNaN(dividendo) || isNaN(divisor)) {
    console.log('ERROR: Tipo de dato no válido.');
} else if (divisor === 0) {
    console.log('ERROR: No se puede dividir por 0.');
} else if (dividendo < divisor) {
    console.log(`El resto de la división es: ${dividendo}.`);
} else {
    while (dividendo >= divisor) {
        dividendo -= divisor;
    }
    console.log(`El resto de la división es: ${dividendo}.`);
}
