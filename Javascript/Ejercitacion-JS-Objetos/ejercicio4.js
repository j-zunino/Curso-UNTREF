// Ejercicio 4: Añadir un nuevo auto al array utilizando el método push().

const autos = [
    {
        marca: 'Toyota',
        modelo: 'Sprinter Trueno',
        año: 1983
    },
    {
        marca: 'Mazda',
        modelo: 'RX-7 (FC3S)',
        año: 1985
    },
    {
        marca: 'Mazda',
        modelo: 'RX-7 (FD3S)',
        año: 1992
    },
    {
        marca: 'Honda',
        modelo: 'Civic (EG6)',
        año: 1991
    }
];

console.log(autos);

autos.push({
    marca: 'Nissan',
    modelo: 'Skyline GT-R 32 (BRN32)',
    año: 1989
});

console.log(autos);
