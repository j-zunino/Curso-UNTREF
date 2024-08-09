// Factorial de un número:

// Escriba un programa en JavaScript con una función que reciba un valor entero positivo y devuelva su factorial.

const prompt = require('prompt-sync')();

const factorial = (factorial) => {
  let resultado = 1;
  for (let i = 1; i <= factorial; i++) {
    resultado *= i;
  }
  return console.log(`El factorial de ${factorial} es: ${resultado}`);
};

let num = 0;

do {
  num = parseInt(prompt('Ingrese un número positivo: '));
  factorial(num);
} while (num < 0);
