// Sucesión de Fibonacci:

// Diseñe un algoritmo en JavaScript que permita mediante un menú de opciones:
// Ingresar un número y obtener su correspondiente valor en la sucesión de Fibonacci.
// Solicitar un número y determinar si pertenece a la sucesión de Fibonacci mediante la devolución de un valor lógico.

const prompt = require('prompt-sync')();

const fibonacci = (numero) => {
    let a = 0;
    let b = 1;
    for (let i = 1; i <= numero; i++) {
        const c = a;
        a = b;
        b = c + b;
    }

    console.log(
        `El valor del número ${numero} en la sucesión de Fibonacci es: ${a}`
    );
};

const isFibonacci = (numero) => {
    let a = 0;
    let b = 1;

    while (b < numero) {
        const c = a;
        a = b;
        b = c + b;
    }

    if (numero === b) {
        console.log(
            `El número ${numero} pertenece a la sucesión de Fibonacci.`
        );
    } else {
        console.log(
            `El número ${numero} no pertenece a la secesión de Fibonacci.`
        );
    }
};

const menu = (opcion) => {
    switch (opcion) {
        case 1:
            fibonacci(parseInt(prompt('Ingrese un número: ')));
            break;
        case 2:
            isFibonacci(parseInt(prompt('Ingrese un número: ')));
            break;
        default:
            console.log('Saliendo...');
            break;
    }
};

console.log(`
1. Valor en Fibonacci.
2. Es Fibonacci?"
`);

menu((opcion = parseInt(prompt('Seleccione una opción (1/2): '))));
