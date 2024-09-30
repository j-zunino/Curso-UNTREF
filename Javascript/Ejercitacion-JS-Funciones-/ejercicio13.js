// Promedio y calificación de notas:

// Realice un programa en JavaScript que permita ingresar repetidamente el código (DNI) del estudiante (tipo entero) y dos notas (Nota1 y Nota2) de los exámenes (tipo real). La finalización del ingreso de datos ocurre cuando se ingresa un código igual a 999 (validar que las notas sean valores mayores o iguales a cero). Calcule el promedio de las notas mediante una función llamada promedioNotas. Asigne la calificación de acuerdo a las notas usando una función denominada calificacionNotas que reciba la Nota promedio y devuelva una cadena de caracteres con la calificación correspondiente.

const prompt = require('prompt-sync')();

const ingresoDni = () => {
    do {
        dni = parseInt(
            prompt('Ingrese el DNI del estudiante (999 para salir): ')
        );

        if (!isNaN(dni) && dni > 0) {
            return dni;
        } else {
            console.log('ERROR: El DNI no es válido.');
        }
    } while (true);
};

const ingresoNota = () => {
    let nota1, nota2;
    do {
        nota1 = parseFloat(prompt('Ingrese la primera nota: '));
        nota2 = parseFloat(prompt('Ingrese la segunda nota: '));

        if (nota1 >= 0 && nota2 >= 0 && !isNaN(nota1) && !isNaN(nota2)) {
            return { nota1, nota2 };
        } else {
            console.log(
                'ERROR: Las notas ingresadas no son válidas. Deben ser números mayores o iguales a 0.'
            );
        }
    } while (true);
};

const promedioNotas = (nota1, nota2) => {
    return (nota1 + nota2) / 2;
};

const calificacionNotas = (promedio) => {
    if (promedio >= 90) {
        return 'Sobresaliente';
    } else if (promedio >= 70) {
        return 'Notable';
    } else if (promedio >= 50) {
        return 'Aprobado';
    } else {
        return 'Reprobado';
    }
};

do {
    dni = ingresoDni();

    if (dni !== 999) {
        const { nota1, nota2 } = ingresoNota();
        const promedio = promedioNotas(nota1, nota2);
        const calificacion = calificacionNotas(promedio);

        console.log(
            `DNI: ${dni}, Promedio: ${promedio.toFixed(
                2
            )}, Calificación: ${calificacion}`
        );
    }
} while (dni !== 999);

console.log('Ingreso finalizado.');
