// Ejercicio 2
// Realizar la multiplicación de dos números enteros A y B mediante sumas sucesivas, hacer tres
// algoritmos con cada estructura repetitiva.

const prompt = require('prompt-sync')();

let numeroA = 0;
let numeroB = 0;
let multiplicador = 0;

function ingresoNumero() {
    numeroA = parseInt(prompt('Ingrese el número A: '));
    numeroB = parseInt(prompt('Ingrese el número B: '));

    multiplicador = Math.abs(numeroB);

    console.log(`Números a multiplicar: ${numeroA + ', ' + numeroB}`);

    return { numeroA, numeroB, multiplicador };
}

function funcWhile() {
    let contador = 0;
    let resultado = 0;

    ingresoNumero();

    if (isNaN(numeroA) || isNaN(numeroB)) {
        console.log('ERROR: Tipo de dato no valido.');
    } else {
        while (contador < multiplicador) {
            resultado += numeroA;

            contador++;
        }

        if (numeroB < 0) {
            resultado = -resultado;
        }

        console.log(`Resultado de la multiplicación: ${resultado}.`);
    }
}

function funcDoWhile() {
    let contador = 0;
    let resultado = 0;

    ingresoNumero();

    if (isNaN(numeroA) || isNaN(numeroB)) {
        console.log('ERROR: Tipo de dato no valido.');
    } else {
        do {
            resultado += numeroA;

            contador++;
        } while (contador < multiplicador);

        if (numeroB < 0) {
            resultado = -resultado;
        }

        console.log(`Resultado de la multiplicación: ${resultado}.`);
    }
}

function funcFor() {
    let resultado = 0;

    ingresoNumero();

    if (isNaN(numeroA) || isNaN(numeroB)) {
        console.log('ERROR: Tipo de dato no valido.');
    } else {
        for (let contador = 0; contador < multiplicador; contador++) {
            resultado += numeroA;
        }

        if (numeroB < 0) {
            resultado = -resultado;
        }

        console.log(`Resultado de la multiplicación: ${resultado}.`);
    }
}

funcWhile();

// funcDoWhile()

// funcFor()
