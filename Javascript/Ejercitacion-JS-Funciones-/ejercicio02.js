// Suma con tercer argumento:

// Escriba un programa en JavaScript similar al anterior, pero esta vez utilizando una función que tome un tercer argumento y coloque el resultado de la suma en dicho parámetro.

const prompt = require('prompt-sync')();

const suma = (numA, numB, numC) => {
    numC = numA + numB;
    return numC;
};

const numA = parseInt(prompt('Ingrese el primer número a sumar: '));
const numB = parseInt(prompt('Ingrese el segundo número a sumar: '));
const numC = 0;

const resultado = suma(numA, numB, numC);
console.log(`Números a sumar: ${numA}, ${numB}`);
console.log(`El resultado de la suma es: ${resultado}`);
