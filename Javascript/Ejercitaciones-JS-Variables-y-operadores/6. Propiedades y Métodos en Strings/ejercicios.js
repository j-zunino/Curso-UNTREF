// Ejercicio 6.1: Declara una variable 'frase' y asígnale el valor "JavaScript es genial". Usa el método 'length' para mostrar la longitud de la cadena.
// Ejercicio 6.2: Usa el método 'indexOf' para encontrar la posición de la palabra "genial" en la variable 'frase' y muestra el resultado en la consola.
// Ejercicio 6.3: Usa el método 'slice' para extraer la palabra "JavaScript" de la variable 'frase' y muestra el resultado en la consola.
// Ejercicio 6.4: Declara una variable 'nombreCompleto' y asígnale el valor "   Juan Pérez   ". Usa el método 'trim' para eliminar los espacios en blanco al principio y al final de la cadena y muestra el resultado en la consola.
// Ejercicio 6.5: Declara una variable 'cancion' y asígnale el valor "Twinkle, twinkle, little star". Usa el método 'split' para dividir la cadena en palabras individuales y muestra el resultado en la consola.

const frase = 'JavaScript es genial';

console.log('Largo de la frase: ' + frase.length);

console.log("El index de la palabra 'genial' es: " + frase.indexOf('genial'));

console.log('Frase cortada: ' + frase.slice(0, 10));

const nombre_completo = '   Juan Pérez   ';

console.log(
    'Espacios sin cortar: ' +
        nombre_completo +
        'Espacios cortados: ' +
        nombre_completo.trim(' ')
);

const cancion = 'Twinkle, twinkle, little star';

console.log(cancion.split(' '));
