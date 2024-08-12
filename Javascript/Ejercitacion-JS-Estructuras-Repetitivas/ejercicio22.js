// 22. Calcular la nota promedio de un salón de clase y la nota mayor y el código del estudiante
// que la obtuvo, validar que las notas ingresadas se encuentren en el intervalo [0,10]. El
// ingreso de notas finaliza a pedido del operador.

const prompt = require('prompt-sync')();

const listaNota = [];
let mejorNota = 0;
let codEstudiante = 1;
let mejorEstudiante = 0;
let continuar = '';

do {
    const nota = parseFloat(prompt('Ingrese la nota del estudiante: '));

    if (nota < 0 || nota > 10 || isNaN(nota)) {
        console.log('ERROR: Dato ingresado no valido');
    } else {
        listaNota.push(nota);
        if (nota > mejorNota) {
            mejorNota = nota;
            mejorEstudiante = codEstudiante;
        }

        codEstudiante++;

        continuar = prompt('Desea continuar? (S/n): ').toLowerCase();
    }
} while (continuar !== 'n');

console.log('Saliendo...');

let promedio = 0;

for (let i = 0; i < listaNota.length; i++) {
    promedio += listaNota[i];
}

promedio /= listaNota.length;

console.log(`Promedio notas: ${promedio.toFixed(2)}
Mejor nota: ${mejorNota}
Código mejor estudiante: ${mejorEstudiante}`);
