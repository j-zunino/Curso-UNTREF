// Ejercicio 3: Comportamiento del motor JavaScript asincrónico
// Escribe un código que simule la llegada de tres mensajes en tiempos distintos.
// Utiliza `setTimeout` para que los mensajes aparezcan en la consola después de 2, 4 y 6 segundos, respectivamente.
// Antes de iniciar, muestra en la consola "Iniciando proceso...".
// Una vez que todos los mensajes se hayan mostrado, imprime "Proceso completado" en la consola.
// Observa cómo se comporta JavaScript al ejecutar estas tareas de manera asincrónica.

let contador = 0;

console.log('Iniciando proceso...');

const interval = setInterval(() => {
    contador++;

    if (contador === 2 || contador == 4 || contador === 6) {
        console.log(`Mensaje enviado despues de ${contador}`);

        if (contador === 6) {
            console.log('Proceso completado');
            clearInterval(interval);
        }
    }
}, 1000);
