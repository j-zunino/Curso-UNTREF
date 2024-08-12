// 20. Suponga que tiene usted una tienda y desea registrar las ventas en su computadora. Diseñe un algoritmo que lea por cada cliente, el monto total de su compra. Al final del día que escriba la cantidad total de ventas y el número de clientes atendidos.

const prompt = require('prompt-sync')();

let venta = 0;
let ventas = 0;
let cantClientes = 0;
let continuar = '';

do {
    venta = parseFloat(prompt('Ingrese el monto de la compra: '));
    if (isNaN(venta) || venta < 0) {
        console.log('ERROR: Dato ingresado no valido');
    } else {
        ventas += venta;
        cantClientes++;
        continuar = prompt('Hay màs clientes? (S/n): ').toLowerCase();
        if (continuar === 'n') {
            console.log('Saliendo...');
            break;
        }
    }
} while (continuar !== 'n');

console.log(`Cantidad total de ventas: ${ventas.toFixed(2)}
Número de clientas atendidos: ${cantClientes}`);
