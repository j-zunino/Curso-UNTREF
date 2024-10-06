// Ejercicio 2: Uso de `clearTimeout` y `clearInterval`
// Crea un temporizador que muestre "¡Tiempo de descanso!" en la consola después de 10 segundos.
// Si el usuario realiza una acción (como presionar una tecla), el temporizador debe ser cancelado usando `clearTimeout`.
// Luego, escribe un programa que muestre "Cargando..." en la consola cada 2 segundos, pero que detenga este mensaje después de que se haya mostrado 3 veces, utilizando `setInterval` y `clearInterval`.

let contador = 0;

const timeOut = setTimeout(() => {
    console.log('¡Tiempo de descanso!');
}, 10000);

window.addEventListener('keydown', () => {
    clearTimeout(timeOut);
    console.log('TimeOut cancelado');
});

const interval = setInterval(() => {
    contador++;
    if (contador >= 3) {
        clearInterval(interval);
        console.log('Interval cancelado');
    }
    console.log('Cargando...');
}, 2000);
