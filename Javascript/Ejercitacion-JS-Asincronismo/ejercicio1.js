// Ejercicio 1: Uso de `setTimeout` y `setInterval`
// Escribe un programa en el que se imprima un mensaje en la consola después de 3 segundos usando `setTimeout`.
// Luego, implementa un contador que aumente en 1 cada segundo usando `setInterval`, y muestra el valor del contador en la consola.
// Asegúrate de detener el contador después de que llegue a 5, utilizando `clearInterval`.

let contador = 0;

setTimeout(() => {
    console.log('hola mundo');
}, 3000);

const interval = setInterval(() => {
    console.log(contador++);

    if (contador === 5) {
        clearInterval(interval);
    }
}, 1000);
