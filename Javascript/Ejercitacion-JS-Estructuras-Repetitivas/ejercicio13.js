// 13. Escribir un programa que lea valores enteros hasta que se introduzca un 0 y calcule la media de los
// positivos y la media de los negativos

const prompt = require('prompt-sync')()

let numeroInput = 0
let contadorPositivo = 0
let contadorNegativo = 0
let positivo = 0
let negativo = 0

do {
  numeroInput = parseInt(prompt('Ingrese un número (0 para salir): '))
  if (isNaN(numeroInput)) {
    console.log('ERROR: Dato ingresado no valido.')
  } else {
    if (numeroInput === 0) {
      console.log('Saliendo...')
      break
    } else if (numeroInput > 0) {
      positivo += numeroInput
      contadorPositivo++
    } else {
      negativo += numeroInput
      contadorNegativo++
    }
    console.log(`${positivo}, ${negativo}`)
  }
} while (numeroInput !== 0)

positivo = contadorPositivo > 0 ? positivo / contadorPositivo : 0
negativo = contadorNegativo > 0 ? negativo / contadorNegativo : 0

// prettier-ignore
console.log(`Media de números positivos: ${(positivo).toFixed(2)}
Media números negativos: ${Math.abs((negativo)).toFixed(2)}`)
