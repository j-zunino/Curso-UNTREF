// Suma de dos números:

// Escriba un programa en JavaScript con una función que tome como parámetros dos enteros, los sume y devuelva como resultado la suma. El programa deberá pedir al usuario los dos números, luego llamar a la función con los números leídos como argumentos y, por último, informar al usuario el valor de la suma.

const prompt = require('prompt-sync')();

const suma = (numA, numB) => {
    console.log(`Números a sumar: ${numA}, ${numB}`);
    console.log(`El resultado de la suma es: ${numA + numB}`);
};

const numA = parseInt(prompt('Ingrese el primer número a sumar: '));
const numB = parseInt(prompt('Ingrese el segundo número a sumar: '));

suma(numA, numB);
