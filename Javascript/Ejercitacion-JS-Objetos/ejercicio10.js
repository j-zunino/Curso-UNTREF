// Ejercicio 10: Utilizar un bucle for...of para iterar sobre un array de autos e imprimir sus descripciones.

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

for (const auto of autos) {
    console.log(auto.desc());
}
