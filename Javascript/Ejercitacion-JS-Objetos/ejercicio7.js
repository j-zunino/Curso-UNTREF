// Ejercicio 7: Crear un array de objetos utilizando una función constructora.

function Auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

const autos = [
    new Auto('Toyota', 'Supra', 1998),
    new Auto('Mazda', 'RX-7', 1992),
    new Auto('Nissan', 'Skyline GT-R', 1999),
    new Auto('Honda', 'Civic Type R', 2020)
];

