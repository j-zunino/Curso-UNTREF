// 14. Leer 10 valores desde teclado y mostrar la media de los pares y la media de los impares. Hacer tres
// versiones, con un bucle: para, mientras y repetir. Repetir el ejercicio considerando que el número de
// valores se le solicita al usuario.

const prompt = require('prompt-sync')()

let numeroInput = 0
let contadorPar = 0
let contadorImpar = 0
let numeroPar = 0
let numeroImpar = 0
let contador = 0

function funcWhile () {
  while (contador < 10) {
    numeroInput = parseInt(prompt(`Ingrese un número (${contador + 1}/ 10): `))
    if (isNaN(numeroInput)) {
      console.log('ERROR: Dato ingresado no valido.')
    } else {
      if (numeroInput === 0) {
        console.log('Saliendo...')
        break
      } else if (numeroInput % 2 === 0) {
        console.log('numeroPar')
        numeroPar += numeroInput
        contadorPar++
      } else {
        console.log('numeroImpar')
        numeroImpar += numeroInput
        contadorImpar++
      }
      contador++
      console.log(`${numeroPar}, ${numeroImpar}`)
    }
  }

  numeroPar = contadorPar > 0 ? numeroPar / contadorPar : 0
  numeroImpar = contadorImpar > 0 ? numeroImpar / contadorImpar : 0

  // prettier-ignore
  console.log(`Media de números par: ${(numeroPar).toFixed(2)}
Media impar: ${Math.abs((numeroImpar)).toFixed(2)}`)
}

function funcDoWhile () {
  do {
    numeroInput = parseInt(prompt(`Ingrese un número (${contador + 1}/ 10): `))
    if (isNaN(numeroInput)) {
      console.log('ERROR: Dato ingresado no valido.')
    } else {
      if (numeroInput === 0) {
        console.log('Saliendo...')
        break
      } else if (numeroInput % 2 === 0) {
        console.log('numeroPar')
        numeroPar += numeroInput
        contadorPar++
      } else {
        console.log('numeroImpar')
        numeroImpar += numeroInput
        contadorImpar++
      }
      contador++
      console.log(`${numeroPar}, ${numeroImpar}`)
    }
  } while (contador < 10)

  numeroPar = contadorPar > 0 ? numeroPar / contadorPar : 0
  numeroImpar = contadorImpar > 0 ? numeroImpar / contadorImpar : 0

  // prettier-ignore
  console.log(`Media de números par: ${(numeroPar).toFixed(2)}
Media números impar: ${Math.abs((numeroImpar)).toFixed(2)}`)
}

function funcFor () {
  for (; contador < 10; contador++) {
    numeroInput = parseInt(prompt(`Ingrese un número (${contador + 1}/ 10): `))
    if (isNaN(numeroInput)) {
      console.log('ERROR: Dato ingresado no valido.')
      contador--
    } else {
      if (numeroInput === 0) {
        console.log('Saliendo...')
        break
      } else if (numeroInput % 2 === 0) {
        console.log('numeroPar')
        numeroPar += numeroInput
        contadorPar++
      } else {
        console.log('numeroImpar')
        numeroImpar += numeroInput
        contadorImpar++
      }
      console.log(`${numeroPar}, ${numeroImpar}`)
    }
  }

  numeroPar = contadorPar > 0 ? numeroPar / contadorPar : 0
  numeroImpar = contadorImpar > 0 ? numeroImpar / contadorImpar : 0

  // prettier-ignore
  console.log(`Media de números par: ${(numeroPar).toFixed(2)}
Media impar: ${Math.abs((numeroImpar)).toFixed(2)}`)
}

funcWhile()

// funcDoWhile()

// funcFor()
