// 18. Un censista recopila ciertos datos aplicando encuestas para el último Censo Nacional de Población y
// Vivienda. Desea procesar los datos de todas las personas que alcance a encuestar en un día y
// obtener los porcentajes de estudios de niveles primario, secundario, superior no universitario,
// universitario y de postgrado.

const prompt = require('prompt-sync')();

let contador = 0;
let primario = 0;
let secundario = 0;
let superior = 0;
let universitario = 0;
let postgrado = 0;
let respuesta = '';
while (true) {
    console.log(`
0. Salir
1. Primario
2. Secundario
3. Superior no universitario
4. Universitario
5. Postgrado
    `);
    respuesta = parseInt(prompt('Ingrese su nivel de estudios: '));

    if (isNaN(respuesta)) {
        console.log('ERROR: Dato ingresado no valido.');
    } else if (respuesta < 0 || respuesta > 5) {
        console.log('ERROR: Respuesta fuera de rango.');
    } else {
        if (respuesta === 0) {
            console.log('Saliendo...');
            break;
        } else if (respuesta === 1) {
            primario++;
        } else if (respuesta === 2) {
            secundario++;
        } else if (respuesta === 3) {
            superior++;
        } else if (respuesta === 4) {
            universitario++;
        } else if (respuesta === 5) {
            postgrado++;
        }
        contador++;
    }
}

const calcularPromedio = (nivel, total) => {
    return ((nivel / total) * 100).toFixed(2);
};

console.log(`Promedio de los niveles de estudio de ${contador} personas:
1. Primario: ${calcularPromedio(primario, contador)}%
2. Secundario: ${calcularPromedio(secundario, contador)}%
3. Superior: ${calcularPromedio(superior, contador)}%
4. Universitario: ${calcularPromedio(universitario, contador)}%
5. Postgrado: ${calcularPromedio(postgrado, contador)}%
`);
