// 21. Se ofrece un trabajo que pague un centavo en la primera semana y dobla su salario cada semana, es decir, $0.01 la primera semana; $0.02 la segunda semana; $0.04 la tercera semana;
// $(2^n-1)/100 la n-ésima semana. Determine el salario por cada semana y el salario pagado hasta la fecha por espacio de n semanas.

const prompt = require('prompt-sync')()

let salario = 0.01
let salarioAcumulado = 0

const cantSemanas = parseInt(prompt('Ingrese el número de semanas: '))

if (isNaN(cantSemanas) || cantSemanas <= 0) {
  console.log('ERROR: Dato ingresado no valido')
} else {
  for (let semana = 1; semana <= cantSemanas; semana++) {
    salarioAcumulado += salario
    // prettier-ignore
    console.log(`Semana n°: ${semana}, salario: ${salario.toFixed(2)}, salario acumulado: ${salarioAcumulado.toFixed(2)}`)

    salario *= 2
  }
}
