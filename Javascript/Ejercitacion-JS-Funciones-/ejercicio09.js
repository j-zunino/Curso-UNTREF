// Módulos variados:

// Realice un programa en JavaScript que incluya los siguientes módulos:
// Menú: tiene un parámetro entero pasado por referencia que devuelve una opción.
// Bienvenida: sin parámetros que muestra un mensaje de bienvenida.
// Resto: acepta dos parámetros enteros y devuelve un número entero que es el resto de la división entera del primer parámetro sobre el segundo parámetro (sin utilizar el operador MOD).
// EsPar: devuelve el valor lógico "verdadero" o "falso" según si el número que se indique como parámetro es par o no.
// NumeroACadena: acepta un parámetro entero número entre 0 y 10, y devuelve una cadena de caracteres que representa el número en letras.
// Intercambio: acepta dos parámetros pasados por referencia que intercambian los valores de los parámetros.
// Pida al usuario dos números y muestre la "distancia" entre ellos (el valor absoluto de su diferencia, de modo que el resultado sea siempre positivo).

const prompt = require('prompt-sync')();

const menu = (opcion) => {
    switch (opcion) {
        case 0:
            console.log('Saliendo...');
            break;
        case 1:
            bienvenida();
            break;
        case 2:
            const dividendo = parseInt(prompt('Ingrese el dividendo: '));
            const divisor = parseInt(prompt('Ingrese el dividendo: '));
            resto(dividendo, divisor);
            break;
        case 3:
            const numeroParImpar = parseInt(prompt('Ingrese un número: '));
            esPar(numeroParImpar);
            break;
        case 4:
            const numeroCadena = parseInt(prompt('Ingrese un número: '));
            numCadena(numeroCadena);
            break;
        case 5:
            const intercambioA = parseInt(prompt('Ingrese un número: '));
            const intercambioB = parseInt(prompt('Ingrese un número: '));
            intercambio(intercambioA, intercambioB);
            break;
        case 6:
            const distanciaA = parseInt(prompt('Ingrese un número: '));
            const distanciaB = parseInt(prompt('Ingrese un número: '));
            distancia(distanciaA, distanciaB);
            break;
        default:
            console.log('Saliendo...');
            break;
    }
};

const bienvenida = () => {
    const saludos = [
        '¡Bienvenido!',
        '¡Hola! Nos alegra verte aquí.',
        '¡Bienvenido de nuevo!',
        '¡Bienvenido! ¿Cómo podemos ayudarte hoy?',
        'Saludos y bienvenido.',
        '¡Bienvenido! Esperamos que encuentres lo que buscas.',
    ];

    const N = Math.floor(Math.random() * saludos.length);

    return console.log(saludos[N]);
};

const resto = (dividendo, divisor) => {
    const cociente = Math.floor(dividendo / divisor);
    const resto = dividendo - cociente * divisor;

    return console.log(`El resto de la division es: ${resto}`);
};

const esPar = (numero) => {
    return numero % 2 === 0;
};

const numCadena = (numero) => {
    lista = [
        'Cero',
        'Uno',
        'Dos',
        'Tres',
        'Cuatro',
        'Cinco',
        'Seis',
        'Siete',
        'Ocho',
        'Nueve',
        'Diez',
    ];

    return console.log(lista[numero]);
};

const intercambio = (a, b) => {
    console.log(`Números antes: ${a}, ${b}`);
    const temp = b;
    b = a;
    a = temp;
    return console.log(`Números intercambiados: ${a}, ${b}`);
};

const distancia = (a, b) => {
    for (let i = a + 1; i < b; i++) {
        console.log(i);
    }
};

console.log(`
1. Bienvenida.
2. Resto.
3. Es par?
4. De número a cadena.
5. Intercambiar números.
6. Distancia entre números.`);

menu((opcion = parseInt(prompt('Seleccione una opción (0/6): '))));
