// 5. Leer un valor de Día, Mes y Año de una fecha (ej.: 10-5-2003). Mostrar la fecha con el respectivo nombre del mes (ej.: 10-mayo-2003).
// Si el número leído para el mes no está entre 1 y 12 imprimir un mensaje de error.
// Comprobar que el día se encuentre entre 1 y 31 y el año sea mayor que 2000.

const prompt = require('prompt-sync')()

const fecha = prompt('Ingrese una fecha (01-01-2000): ')
const arrayFecha = fecha.split('-')

const dia = parseInt(arrayFecha[0])
const mes = parseInt(arrayFecha[1])
const año = parseInt(arrayFecha[2])

const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
]

if (arrayFecha.length !== 3) {
    console.log('ERROR: Longitud de fecha incorrecta.')
} else {
    if (dia < 1 || dia > 31) {
        console.log('ERROR: Dia ingresado no valido.')
    } else if (mes < 1 || mes > 12) {
        console.log('ERROR: Mes ingresado no valido.')
    } else if (año < 2000) {
        console.log('ERROR: Año ingresado no valido, debe ser mayor que 2000.')
    } else {
        const nombreMes = meses[mes - 1]
        console.log(`La fecha es: ${dia} de ${nombreMes} del ${año}.`)
    }
}
