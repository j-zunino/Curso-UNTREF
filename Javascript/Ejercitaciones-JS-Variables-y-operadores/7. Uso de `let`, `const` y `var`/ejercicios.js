// Ejercicio 7.1: Declara una variable usando 'let' dentro de un bloque de código ('{}') y muestra que no está disponible fuera del bloque.
// Ejercicio 7.2: Declara una constante 'PI' y asígnale el valor '3.14159'. Intenta reasignar otro valor a 'PI' y observa lo que ocurre.
// Ejercicio 7.3: Declara una variable 'mensaje' usando 'var' y asígnale el valor "Hola Mundo". Declara la misma variable 'mensaje' dentro de una función y asígnale un valor diferente. Muestra ambos valores en la consola para ver cómo 'var' afecta el alcance de las variables.

{
  let variable = 'hello world'
}

console.log(variable)

const PI = 3.14158

console.log(PI)

PI = 3.14

console.log(PI)

var mensaje = 'Hola Mundo'

function cambiar_mensaje () {
  var mensaje = 'hello World'
  console.log(mensaje)
}

cambiar_mensaje()

console.log(mensaje)
