// 9. Ingresar el nombre del estudiante y la nota del examen final (Nota de tipo entero).
// Asignar la calificación de acuerdo a las notas de la siguiente tabla:
//
// | Nota    | Calificación |
// |---------|--------------|
// | 0 - 2.9 | Desaprobado  |
// | 3 - 5.9 | Aprobado     |
// | 6 - 8.9 | Notable      |
// | 9 - 10  | Sobresaliente|

const prompt = require('prompt-sync')();

const alumnos = [
    {
        nombre: 'Sofia Rodríguez',
    },
    {
        nombre: 'Martín Gómez',
    },
    {
        nombre: 'Juan Carlos',
    },
];

console.log('Lista de alumnos:');

alumnos.forEach((alumno, index) => {
    console.log(`${index + 1}. ${alumno.nombre}`);
});

const alumno = Math.abs(prompt('Ingrese el número del alumno a evaluar: ')) - 1;

if (alumno >= alumnos.length) {
    console.log('ERROR: Alumno no encontrado');
} else {
    const nombreAlumno = alumnos[alumno].nombre;
    let calificacion = '';

    const notaFinal = Math.abs(
        parseFloat(prompt(`Ingrese la nota final del alumno ${nombreAlumno}: `))
    );

    switch (true) {
        case notaFinal >= 0 && notaFinal <= 2.9:
            calificacion = 'desaprobado';
            break;
        case notaFinal >= 3 && notaFinal <= 5.9:
            calificacion = 'aprobado';
            break;
        case notaFinal >= 6 && notaFinal <= 8.9:
            calificacion = 'notable';
            break;
        case notaFinal >= 9 && notaFinal <= 10:
            calificacion = 'sobresaliente';
            break;
        default:
            console.log('ERROR: Nota ingregasa invalida');
    }
    console.log(
        `El alumno ${nombreAlumno} está ${calificacion} con una nota de ${notaFinal}`
    );
}
