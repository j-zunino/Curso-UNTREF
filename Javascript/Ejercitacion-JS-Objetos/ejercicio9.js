// Ejercicio 9: Crear un array de autos y utilizar el método forEach para imprimir la descripción de cada auto.

function Auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.desc = function () {
        return `Este auto es de la marca ${this.marca}, modelo ${this.modelo}, del año ${this.año}`;
    };
}

const autos = [
    new Auto('Toyota', 'Supra', 1998),
    new Auto('Mazda', 'RX-7', 1992),
    new Auto('Nissan', 'Skyline GT-R', 1999),
    new Auto('Honda', 'Civic Type R', 2020)
];

autos.forEach((auto) => {
    console.log(auto.desc());
});
