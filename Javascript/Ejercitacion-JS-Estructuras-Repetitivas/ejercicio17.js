// 17. Un ciclista recorre diariamente 200 kilómetros en su práctica competitiva. El atleta solicita un
// algoritmo que le permita registrar el tiempo empleado en cada recorrido, al final del proceso el
// algoritmo debería mostrar el promedio de los tiempos empleados. También necesita saber cuántas
// veces su tiempo fue menor a valor dado y cuál fue su mejor tiempo realizado.

const prompt = require('prompt-sync')();

const listaTiempos = [];
let promedioTiempos = 0;
let contadorMejoreTiempo = 0;
let tiempoReferencia = 0;

console.log('Ingrese 0 para calcular los tiempos agregados.');

while (true) {
    tiempoReferencia = parseInt(prompt('Ingrese el tiempo de referencia: '));
    if (isNaN(tiempoReferencia)) {
        console.log('ERROR: Dato ingresado invalido.');
    } else {
        break;
    }
}

while (true) {
    const tiempo = parseInt(prompt('Ingrese el tiempo conseguido: '));

    if (isNaN(tiempo)) {
        console.log('ERROR: Dato ingresado invalido.');
    } else if (tiempo === 0) {
        console.log('Saliendo...');
        break;
    } else {
        listaTiempos.push(tiempo);

        console.log(`El tiempo ${tiempo} agregado a la lista.`);
    }
}

for (let i = 0; i < listaTiempos.length; i++) {
    promedioTiempos += listaTiempos[i];

    if (listaTiempos[i] < tiempoReferencia) {
        contadorMejoreTiempo++;
    }
}

const mejorTiempo = Math.min(...listaTiempos);

console.log(`Cantidad de tiempos: ${listaTiempos.length}.
Lista de tiempos: ${listaTiempos}.
Promedio de tiempos: ${promedioTiempos / listaTiempos.length}.
Mejor tiempo: ${mejorTiempo}.
Veces que se mejoro el record anterior (${tiempoReferencia}): ${contadorMejoreTiempo}.`);
