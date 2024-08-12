// Ejercicio 1
// Hacer los algoritmos que calculen el promedio de una serie de notas hasta que se ingrese una nota
// negativa, utilizar las tres estructuras repetitivas.

const prompt = require('prompt-sync')();

let nota = 0;
let suma = 0;
let contador = 0;
const listaNotas = [];

function funcWhile() {
    console.log('Ingrese -1 para salir.');
    while (nota >= 0) {
        nota = parseFloat(prompt('Ingrese una nota: '));
        if (nota < 0) {
            console.log('Saliendo...');
            break;
        } else if (isNaN(nota) || nota < 1 || nota > 10) {
            console.log(`ERROR: Nota ingresada (${nota}) no valida.`);
            break;
        } else {
            listaNotas.push(nota);
            console.log(`Agregando ${nota} a las notas.`);
            suma += nota;
            contador++;
        }
    }

    if (contador <= 0) {
        console.log('ERROR: No hay promedio para mostrar.');
    } else {
        const promedio = suma / contador;
        console.log(
            `El promedio de las notas (${listaNotas}) es: ${promedio.toFixed(
                2
            )}.`
        );
    }
}

function funcDoWhile() {
    console.log('Ingrese -1 para salir.');
    do {
        nota = parseFloat(prompt('Ingrese una nota: '));
        if (nota < 0) {
            console.log('Saliendo...');
            break;
        } else if (isNaN(nota) || nota < 1 || nota > 10) {
            console.log(`ERROR: Nota ingresada (${nota}) no valida.`);
            break;
        } else {
            listaNotas.push(nota);
            console.log(`Agregando ${nota} a las notas.`);
            suma += nota;
            contador++;
        }
    } while (nota >= 0);

    if (contador <= 0) {
        console.log('ERROR: No hay promedio para mostrar.');
    } else {
        const promedio = suma / contador;
        console.log(
            `El promedio de las notas (${listaNotas}) es: ${promedio.toFixed(
                2
            )}.`
        );
    }
}

function funcFor() {
    console.log('Ingrese -1 para salir.');
    for (;;) {
        nota = parseFloat(prompt('Ingrese una nota: '));
        if (nota < 0) {
            console.log('Saliendo...');
            break;
        } else if (isNaN(nota) || nota < 1 || nota > 10) {
            console.log(`ERROR: Nota ingresada (${nota}) no valida.`);
            break;
        } else {
            listaNotas.push(nota);
            console.log(`Agregando ${nota} a las notas.`);
            suma += nota;
            contador++;
        }
    }

    if (contador <= 0) {
        console.log('ERROR: No hay promedio para mostrar.');
    } else {
        const promedio = suma / contador;
        console.log(
            `El promedio de las notas (${listaNotas}) es: ${promedio.toFixed(
                2
            )}.`
        );
    }
}

funcWhile();

funcDoWhile();

funcFor();
