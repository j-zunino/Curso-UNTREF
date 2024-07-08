// Ejercicio 9
// Imprimir los números de 1 a N (siendo N un número que se lee) cada uno con su respectivo factorial.

const prompt = require('prompt-sync')()

const N = Math.abs(parseInt(prompt('Ingrese hasta que número desea mostrar: ')))

if (isNaN(N) || N === 0) {
  console.log('ERROR: Dato ingresado no válido.')
} else {
  console.log(`Números de 1 a ${N} con sus respectivos factoriales:`)
  let factorial = 1
  for (let i = 1; i <= N; i++) {
    factorial *= i
    console.log(`Número: ${i}, factorial: ${factorial}`)
  }
}
