// 11. Calcular el factorial de 10 números diferentes cuyos valores se leen.

const prompt = require('prompt-sync')()

const listaNumeros = []
let contador = 0

function factorizar (numero) {
  if (numero < 0) return undefined
  if (numero === 0 || numero === 1) return 1
  return numero * factorizar(numero - 1)
}

do {
  const numeroInput = parseInt(
    prompt(`Ingrese el número ${contador + 1}/10 a calcular: `)
  )
  if (isNaN(numeroInput)) {
    console.log('ERROR: Dato ingresado no valido.')
  } else {
    listaNumeros.push(numeroInput)
    contador++
  }
} while (contador < 10)

for (let i = 0; i < listaNumeros.length; i++) {
  console.log(
    `N° ${i + 1}, numero: ${listaNumeros[i]}, factorial: ${factorizar(
      listaNumeros[i]
    )}`
  )
}
