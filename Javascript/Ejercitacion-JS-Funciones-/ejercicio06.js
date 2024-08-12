// Mayor de tres números:

// Cree una función en JavaScript llamada MayorDeTres, que reciba tres números enteros y devuelva el valor del mayor de ellos. Por ejemplo, para los números 5, 7 y 5, devolvería el valor 7.

const prompt = require('prompt-sync')();

const mayorDeTres = (num1, num2, num3) => {
    const mayor = Math.max(num1, num2, num3);

    return console.log(`El número mayor es: ${mayor}`);
};

const numA = parseInt(prompt('Ingrese el primer número: '));
const numB = parseInt(prompt('Ingrese el segundo número: '));
const numC = parseInt(prompt('Ingrese el tercer número: '));

mayorDeTres(numA, numB, numC);
