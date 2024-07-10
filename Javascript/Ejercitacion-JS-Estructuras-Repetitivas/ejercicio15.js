// 15. Escribir un programa que lea números enteros de teclado hasta que encuentre uno que cumpla las
// siguientes condiciones:
// • Múltiplo de 2.
// • No múltiplo de 5.
// • Mayor que 100.
// • Menor que 10.000.

do {
  const prompt = require('prompt-sync')()

  const numeroInput = parseInt(prompt('Ingrese un número: '))

  if (isNaN(numeroInput)) {
    console.log('ERROR: Dato ingresado no valido.')
  } else {
    if (
      numeroInput % 2 === 0 &&
      numeroInput % 5 !== 0 &&
      numeroInput > 100 &&
      numeroInput < 10000
    ) {
      console.log(`El número ${numeroInput} cumple con todas las condiciones.`)
      break
    } else {
      console.log(`El número ${numeroInput} no cumple con las condiciones.`)
    }
  }
} while (true)
