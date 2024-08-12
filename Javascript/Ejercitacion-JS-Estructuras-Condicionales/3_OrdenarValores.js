// 3. Ordenar en forma creciente tres valores diferentes A, B, C.

const prompt = require('prompt-sync')();

const valorA = parseFloat(prompt('Ingrese el valor A: '));
const valorB = parseFloat(prompt('Ingrese el valor B: '));
const valorC = parseFloat(prompt('Ingrese el valor C: '));

let menor, medio, mayor;

if (isNaN(valorA) || isNaN(valorB) || isNaN(valorC)) {
    console.log(
        `ERROR: Datos incorrectos. { ${valorA} - ${valorB} - ${valorC}  }`
    );
} else {
    if (valorA > valorB) {
        mayor = valorA;
        menor = valorB;
    } else {
        mayor = valorB;
        menor = valorA;
    }

    if (valorC < menor) {
        medio = menor;
        menor = valorC;
    } else if (valorC > mayor) {
        medio = mayor;
        mayor = valorC;
    } else {
        medio = valorC;
    }

    console.log(`Valores ordenados: ${menor}, ${medio}, ${mayor}.`);
}
