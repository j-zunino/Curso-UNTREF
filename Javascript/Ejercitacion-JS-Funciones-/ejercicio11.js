// Potencia mediante multiplicaciones sucesivas:

// Escriba una función en JavaScript llamada PMS que reciba dos parámetros: B (base) y A (exponente). Calcule B elevado a A mediante multiplicaciones sucesivas de la base. Si el cálculo no puede realizarse, devuelva cero.

const prompt = require('prompt-sync')();

const PMS = (B, A) => {
    if (A < 0) {
        return 0;
    } else if (A === 0) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 0; i < A; i++) {
            resultado *= B;
        }
        return resultado;
    }
};

const B = parseInt(prompt('Ingrese la base: '));
const A = parseInt(prompt('Ingrese el exponente: '));

const resultado = PMS(B, A);
console.log(`El resultado es ${resultado}`);
