// 23. Escribir un programa que vaya pidiendo al usuario valores enteros hasta que introduzca un valor negativo, después debe indicar los 3 valores mayores. Por ejemplo, si el usuario introduce los números: 1, 34, 45, 3, 2, 10, 9, 8, 78, 55, 3, 78, 43 y -5, el programa deberá mostrar: 78, 55, 45.
// Nótese que en el ejemplo el valor 78 aparece dos veces, pero solo se considera una vez entre los tres mayores. Es decir, los valores máximos repetidos únicamente se tienen en cuenta una vez. El orden en el que aparezcan los 3 valores máximos es irrelevante. Aunque en el ejemplo salgan ordenados de mayor a menor, al revés o sin orden también es correcto. Si el usuario introduce menos de tres valores el programa sólo mostrará como mayores los que se han introducido. Por ejemplo, si el usuario introduce: 3, 78, -5, la solución será: 3, 78.

const prompt = require('prompt-sync')()

const listaNumero = []
let numero = 0

do {
  numero = parseInt(prompt('Ingrese un número: '))

  if (isNaN(numero)) {
    console.log('ERROR: Dato ingresado no valido.')
  } else if (numero >= 0) {
    listaNumero.push(numero)
  }
} while (numero >= 0)

const listaMax = [...new Set(listaNumero)]
listaMax.sort((a, b) => b - a)

console.log('Valores más grandes ingresados:')
for (let i = 0; i < 3 && i < listaMax.length; i++) {
  console.log(`N° ${i + 1}: ${listaMax[i]}`)
}
