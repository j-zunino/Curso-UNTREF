// Operaciones sobre un número:

// Escriba un programa en JavaScript que permita introducir un número por teclado y sobre él se realicen las siguientes operaciones: mostrar la cantidad de divisores, hallar su factorial, comprobar si es primo e imprimir su tabla de multiplicar.

const prompt = require('prompt-sync')();

const divisores = (num) => {
  let cantDivisores = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(`${i} es divisor de ${num}.`);
      cantDivisores++;
    }
  }
  console.log(`Cantidad de divisores: ${cantDivisores}.`);
};

const factorial = (num) => {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  return console.log(`El factorial de ${num} es: ${resultado}`);
};

const esPrimo = (num) => {
  if (num % 2 === 0) {
    console.log(`El número ${num} es par.`);
  } else {
    console.log(`El número ${num} es impar.`);
  }
};

const tablaMultiplicar = (num) => {
  console.log(`Tabla de multiplicar del ${num}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};

const num = parseInt(prompt('Ingrese un número: '));

divisores(num);
factorial(num);
esPrimo(num);
tablaMultiplicar(num);
