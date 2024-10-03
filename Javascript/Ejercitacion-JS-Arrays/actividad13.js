// Actividad 13: Crear un array de números y calcular la suma de todos los elementos.

const numeros = [2, 15, 22, -6, 10, 9, -5, 34];

console.log(numeros.reduce((acumulador, numero) => acumulador + numero, 0));
