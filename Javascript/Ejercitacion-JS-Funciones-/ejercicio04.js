// Conversión de minúscula a mayúscula:

// Escriba un programa en JavaScript que utilice una función que reciba un carácter como parámetro, si el carácter es una letra minúscula, modifique el parámetro para convertirlo en mayúscula.

const prompt = require('prompt-sync')();

const checkCase = (letra) => {
    if (letra === !letra.toLowerCase()) {
        return console.log('Letra mayúscula.');
    } else {
        return console.log(
            `Letra minúscula, convertida a mayúscula: ${letra.toUpperCase()}`
        );
    }
};

let input = '';

do {
    input = prompt('Ingrese una letra: ');
    checkCase(input);
} while (input.length !== 1);
