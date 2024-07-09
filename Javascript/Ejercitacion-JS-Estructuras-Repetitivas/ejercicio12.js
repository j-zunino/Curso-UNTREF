// 12. Leer 20 números y encontrar el mayor y el menor valor leídos.

const prompt = require('prompt-sync')()

let contador = 0
let listaNumeros = []

do {
  const numeroInput = parseInt(
    prompt(`Ingrese el número ${contador + 1}/5 a calcular: `)
  )
  if (isNaN(numeroInput)) {
    console.log('ERROR: Dato ingresado no valido.')
  } else {
    listaNumeros.push(numeroInput)
    contador++
  }
} while (contador < 5)

let mayor = listaNumeros[0]
let menor = listaNumeros[0]

for (let i = 0; i < listaNumeros.length; i++) {
  if (listaNumeros[i] > mayor) {
    mayor = listaNumeros[i]
  }
  if (listaNumeros[i] < menor) {
    menor = listaNumeros[i]
  }
}
console.log(`Numero mayor: ${mayor}, menor: ${menor}`)
