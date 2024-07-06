// 6. Escribir un algoritmo que permita dada la fecha de nacimiento de una persona saber cuál es su signo zodiacal.
const prompt = require('prompt-sync')()

const fechaNacimiento = prompt('Ingrese su fecha de nacimiento (dia-mes): ')

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

const signos = [
  'Acuario',
  'Piscis',
  'Aries',
  'Tauro',
  'Géminis',
  'Cáncer',
  'Leo',
  'Virgo',
  'Libra',
  'Escorpio',
  'Sagitario',
  'Capricornio'
]

const fecha = fechaNacimiento.split('-')
const dia = parseInt(fecha[0])
const mes = parseInt(fecha[1])
let signo = ''

if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
  signo = 0 // Acuario
} else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
  signo = 1 // Piscis
} else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
  signo = 2 // Aries
} else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
  signo = 3 // Tauro
} else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
  signo = 4 // Géminis
} else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
  signo = 5 // Cáncer
} else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
  signo = 6 // Leo
} else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
  signo = 7 // Virgo
} else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
  signo = 8 // Libra
} else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
  signo = 9 // Escorpio
} else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
  signo = 10 // Sagitario
} else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
  signo = 11 // Capricornio
} else {
  console.log('ERROR: Fecha ingresada invalida.')
}

console.log(
  `Naciste el ${dia} de ${meses[mes - 1]}, tu signo es ${signos[signo]}.`
)
