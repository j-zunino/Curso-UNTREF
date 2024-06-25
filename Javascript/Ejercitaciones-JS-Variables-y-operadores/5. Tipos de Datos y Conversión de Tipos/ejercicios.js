// Ejercicio 5.1: Declara una variable 'cadenaNumero' y asígnale el valor "123". Convierte esta cadena a un número y almacénalo en una nueva variable 'numeroConvertido'. Muestra ambos valores en la consola.
// Ejercicio 5.2: Declara una variable 'booleano' y asígnale el valor 'true'. Convierte este valor a una cadena y almacénalo en una nueva variable 'cadenaBooleano'. Muestra ambos valores en la consola.

const cadena_numero = '123'

const numero_convertido = parseInt(cadena_numero)

console.log('Cadena de números: ' + cadena_numero + ', numero convertido: ' + numero_convertido)

const booleano = true

const cadena_booleano = booleano.toString()

console.log('Booleano: ' + booleano + ', Cadena booleano: ' + cadena_booleano)
