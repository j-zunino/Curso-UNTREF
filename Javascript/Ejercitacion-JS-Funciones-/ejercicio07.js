// Ordenar tres números:

// Diseñe un algoritmo en JavaScript que ordene tres números A, B, C en forma ascendente utilizando una función llamada menorMayor que tenga dos parámetros pasados por referencia y devuelva en el primer parámetro el valor menor y en el segundo el valor mayor.

const prompt = require('prompt-sync')();

const menorMayor = (a, b) => {
  let temp;
  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }
  return [a, b];
};

const sortNum = (A, B, C) => {
  [A, B] = menorMayor(A, B);

  [A, C] = menorMayor(A, C);

  [B, C] = menorMayor(B, C);

  return console.log(A, B, C);
};

const A = parseInt(prompt('Ingrese el primer número: '));
const B = parseInt(prompt('Ingrese el segundo número: '));
const C = parseInt(prompt('Ingrese el tercer número: '));

sortNum(A, B, C);
