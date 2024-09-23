// Conversión de monedas:

// Escriba una función en JavaScript llamada ConversionPesos que permita convertir una cantidad de dinero dada en dólares, libras, yenes o euros a Pesos Argentinos. Utilice las siguientes equivalencias aproximadas:
// 1 libra = 905.75 pesos
// 1 dólar = 1305.75 pesos
// 1 yen = 8.69 pesos
// 1 euro = 968.52 pesos

const prompt = require('prompt-sync')();

const conversionPesos = (selection) => {
    switch (selection) {
        case 1:
            tasa = 905.75;
            break;
        case 2:
            tasa = 1305.75;
            break;
        case 3:
            tasa = 8.69;
            break;
        case 4:
            tasa = 968.52;
            break;
    }

    const pesos = cantidad * tasa;

    console.log(
        `El monto ${cantidad}, equivale a $${pesos.toFixed(
            2
        )} pesos argentinos.`
    );
};

const cantidad = parseInt(prompt('Ingrese la cantidad a convertir: '));

console.log(`
1. Libra
2. Dólar
3. Yen
4. Euro`);

const selection = parseInt(prompt('Selecciona la moneda: '));

conversionPesos(selection, cantidad);
