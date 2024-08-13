// 2. Una institución de educación, con carreras tanto diurnas como vespertinas, considera lo siguiente en su proceso académico:
// si un estudiante de carrera vespertina tiene una nota de presentación mayor o igual a 6, se exime, y si no alcanza el 6 pero tiene una nota de presentación igual o mayor a 3.5, rinde examen.
// Si el estudiante es de carrera diurna y si su nota de presentación es mayor o igual a 3.5, rinde examen (no hay posibilidad de eximirse).
// En ambos regímenes, si la nota de presentación es menor que 3.5, reprueba.
// Hacer la tabla de decisión y escribir el algoritmo correspondiente.

const prompt = require('prompt-sync')();

const carrera = prompt(
    'Ingrese la carrera del estudiante,(a: diurnas, b: vespertinas): '
).toLowerCase();
const nota = parseFloat(
    prompt('Ingrese la nota de presentación del estudiante (0 - 10): ')
);

// prettier-ignore
if ((carrera !== 'a' && carrera !== 'b') || isNaN(nota) || nota < 0 || nota > 10) {
    console.log(`ERROR: Datos incorrectos. carrera: ${carrera} - nota: ${nota}`)
} else {
    if (nota >= 6 && carrera === 'b') {
        console.log('El estudiante está eximido.')
    } else if (nota >= 3.5) {
        console.log('El estudiante rinde examen.')
    } else if (nota < 3.5) {
        console.log('Es estudiante reprueba.')
    }
}
