// Ejercicio 7
// Realizar la operación de potenciación (a^b), de dos valores enteros positivos, con multiplicaciones.

const prompt = require('prompt-sync')();

const base = parseInt(prompt('Ingrese el número: '));
const exponente = parseInt(prompt('Ingrese el exponente: '));

console.log(`Número: ${base}, exponente: ${exponente}.`);

if (isNaN(base) || isNaN(exponente)) {
    console.log('ERROR: Tipo de dato no válido.');
} else {
    let resultado = 1;
    if (exponente < 0) {
        console.log('ERROR: El exponente debe ser un número entero positivo');
    } else if (exponente > 0) {
        for (let contador = 1; contador <= exponente; contador++) {
            resultado *= base;
        }
    }

    console.log(
        `El resultado de la potencia ${base}^${exponente} es: ${resultado}.`
    );
}
