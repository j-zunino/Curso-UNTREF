// Ejercicio 5
// Imprimir los números pares desde N (siendo N un número par que se lee) en forma descendente
// hasta 2.

const prompt = require('prompt-sync')()

let N = 0
do {
  N = Math.abs(parseInt(prompt('Ingrese un número par: ')))

  if (isNaN(N)) {
    console.log('ERROR: Número ingresado no valido.')
  } else if (N % 2 !== 0) {
    console.log('ERROR: El número ingresado no es par.')
  }
} while (N % 2 !== 0)

for (let i = N; i >= 2; i -= 2) {
  console.log(i)
}
