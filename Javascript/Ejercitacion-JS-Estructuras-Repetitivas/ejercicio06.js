// Ejercicio 6
// Realizar la división entera a/b de dos valores enteros positivos mediante restas.

const prompt = require('prompt-sync')();

let dividendo = parseInt(prompt('Ingrese el dividendo: '));
const divisor = parseInt(prompt('Ingrese el divisor: '));

console.log(`Dividendo: ${dividendo}, divisor: ${divisor}.`);

if (isNaN(dividendo) || isNaN(divisor)) {
    console.log('ERROR: Tipo de dato no válido.');
} else if (divisor === 0) {
    console.log('ERROR: No se puede dividir por 0.');
} else if (dividendo < divisor) {
    console.log(`El resultado de la división es: 0, resto: ${dividendo}.`);
} else {
    let resultado = 0;
    while (dividendo >= divisor) {
        dividendo -= divisor;
        resultado++;
    }
    console.log(
        `El resultado de la división es: ${resultado}, resto: ${dividendo}.`
    );
}
