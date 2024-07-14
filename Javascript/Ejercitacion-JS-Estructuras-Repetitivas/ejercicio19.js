// 19. Ingrese un valor numérico correspondiente a un mes y a continuación muestre todos los meses en
// letras que restan para llegar a diciembre del mismo año (por ejemplo, si ingresa 10 debe mostrar
// octubre, noviembre y diciembre). Validar que se ingrese un número de mes válido y el proceso
// finaliza cuando el operador ingresa el valor cero. Muestre también los valores correctos e
// incorrectos ingresados por el usuario.

const prompt = require('prompt-sync')()

let valoresCorrectos = []
let valoresIncorrectos = []

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

while (true) {
  let mes = parseInt(prompt('Ingrese un mes: '))

  if (isNaN(mes)) {
    console.log('ERROR: Datos ingresado no valido.')
    valoresIncorrectos.push(mes)
  } else if (mes === 0) {
    console.log('Saliendo...')
    break
  } else if (mes < 1 || mes > 12) {
    console.log('ERROR: Rango ingresado no valido.')
    valoresIncorrectos.push(mes)
  } else {
    valoresCorrectos.push(mes)
    for (let i = mes - 1; i < meses.length; i++) {
      console.log(meses[i])
    }
  }
}

console.log(`Valor incorrectos ingresado: ${valoresIncorrectos.join(', ')}
Valores correctos ingresador: ${valoresCorrectos.join(', ')}`)
