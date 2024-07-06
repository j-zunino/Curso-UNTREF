// 8. En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja.
// Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es anaranjada un 100%.
// Determinar la cantidad final que el cliente deberá pagar por su compra si se sabe que solo hay bolitas de los colores mencionados.

const prompt = require('prompt-sync')()

let descuento = 0

const colores = ['Blanco', 'Verde', 'Amarillo', 'Azul', 'Anaranjada']

const indexAleatorio = Math.floor(Math.random() * colores.length)
const color = colores[indexAleatorio]

const precio = parseFloat(prompt('Ingrese el precio a pagar: '))

switch (color) {
  case colores[0]:
    console.log(`Bolita color ${color}, no habrá descuento.`)
    break

  case colores[1]:
    console.log(`Bolita color ${color}, descuento del 10%.`)
    descuento = 0.1
    break

  case colores[2]:
    console.log(`Bolita color ${color}, descuento del 25%.`)
    descuento = 0.25
    break

  case colores[3]:
    console.log(`Bolita color ${color}, descuento del 50%.`)
    descuento = 0.5
    break

  case colores[4]:
    console.log(`Bolita color ${color}, descuento del 100%.`)
    descuento = 1
    break

  default:
    console.log('ERROR.')
    break
}

console.log(`Debes pagar: ${precio - precio * descuento}.`)
