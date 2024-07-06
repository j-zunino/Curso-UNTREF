// 1. Leer una variable N de tipo entero e informar si el numero es positivo, negativo o cero y también si es par, impar o cero. El número cero no es ni positivo ni negativo ni par ni impar.

const min = -10
const max = 10
const N = Math.round(Math.random() * (max - min)) + min

if (N === 0) {
  console.log('El número ' + N + ' es 0.')
} else {
  if (N > 0) {
    console.log('El número ' + N + ' es positivo.')
  } else {
    console.log('El número ' + N + ' es negativo.')
  }
  if (N % 2 === 0) {
    console.log('El número es par.')
  } else {
    console.log('El número es impar.')
  }
}
