// 4. Escribir un algoritmo que con solo ingresar los lados de un triángulo rectángulo le dice al usuario si es isósceles, escaleno o equilátero.

const prompt = require('prompt-sync')()

const ladoA = Math.abs(parseFloat(prompt('Ingrese el lado A del triangulo: ')))
const ladoB = Math.abs(parseFloat(prompt('Ingrese el lado B del triangulo: ')))
const ladoC = Math.abs(parseFloat(prompt('Ingrese el lado C del triangulo: ')))

if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    console.log(
        `ERROR: Datos incorrectos. Lado A: ${ladoA}, lado B: ${ladoB}, lado C: ${ladoC}.`
    )
} else {
    console.log(`Lado A: ${ladoA}, lado B: ${ladoB}, lado C: ${ladoC}.`)

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('El triangulo es equilátero.')
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('El triangulo es isósceles.')
    } else {
        console.log('El triangulo es Escaleno.')
    }
}
