// Cálculo del jornal diario:

// Los empleados de una fábrica trabajan en dos turnos, diurno y nocturno. Escriba una función en JavaScript llamada jornal que tome como parámetros el número de horas, el turno y el tipo de día ("Festivo" o "Laborable") y devuelva el sueldo a cobrar. Además, escriba un algoritmo principal que pida el nombre del trabajador, el día de la semana, turno y número de horas trabajadas, y muestre el sueldo a cobrar usando la función jornal. Tenga en cuenta que la función pide el tipo de día, pero en el algoritmo se debe saber si el día introducido por el usuario es festivo o no.

const prompt = require('prompt-sync')();

const jornal = (horas, turno, tipoDia) => {
    let tarifaBase = 0;

    if (turno === 'diurno') {
        tarifaBase = tipoDia === 'Laborable' ? 10 : 15;
    } else if (turno === 'nocturno') {
        tarifaBase = tipoDia === 'Laborable' ? 12 : 18;
    } else {
        console.log('ERROR: Turno no válido.');
        return 0;
    }

    const sueldo = horas * tarifaBase;
    return sueldo;
};

const calcularSueldoTrabajador = () => {
    const nombre = prompt('Ingrese el nombre del trabajador: ');

    const diaSemana = prompt(
        'Ingrese el día de la semana (Lunes a Domingo): '
    ).toLowerCase();

    let tipoDia = 'Laborable';
    if (diaSemana === 'sábado' || diaSemana === 'domingo') {
        tipoDia = 'Festivo';
    }

    const turno = prompt(
        'Ingrese el turno (diurno o nocturno): '
    ).toLowerCase();

    const horas = parseFloat(prompt('Ingrese el número de horas trabajadas: '));

    const sueldo = jornal(horas, turno, tipoDia);

    console.log(`Trabajador: ${nombre}
Día: ${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)}
Turno: ${turno.charAt(0).toUpperCase() + turno.slice(1)}
Horas trabajadas: ${horas}
Sueldo a cobrar: $${sueldo.toFixed(2)}`);
};

let continuar = true;
while (continuar) {
    calcularSueldoTrabajador();

    const respuesta = prompt(
        '¿Desea ingresar otro trabajador? (S/n): '
    ).toLowerCase();
    if (respuesta === 'n') {
        continuar = false;
        console.log('Fin del cálculo de jornales.');
    }
}
