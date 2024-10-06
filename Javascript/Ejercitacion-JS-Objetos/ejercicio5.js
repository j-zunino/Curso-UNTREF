// Ejercicio 5: Crear una función constructora para objetos auto.

function Autos(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

const auto = new Autos('Toyota', 'Supra', 1998);
