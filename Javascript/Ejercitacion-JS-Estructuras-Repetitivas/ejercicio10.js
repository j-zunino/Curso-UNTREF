// Ejercicio 10
// Imprimir los 100 primeros números de Fibonacci. Recuerde que un número de Fibonacci se calcula
// como la suma de los dos anteriores así: 0, 1, 1, 2, 3, 5, 8, 13...

let a = 0;
let b = 1;

for (let i = 0; i <= 100; i++) {
    console.log(`Número ${i}, ${a}`);
    const numero = a;
    a = b;
    b = numero + b;
}
