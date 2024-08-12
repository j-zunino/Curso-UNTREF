// 24. Un galpón tiene al comienzo de la jornada una cantidad inicial (Stock inicial) de cajones
// con productos de un solo tipo, luego repetidamente, entran y salen camiones, que traen o
// llevan cantidades de cajones. Si no alcanza la cantidad a llevar, se debe mostrar un mensaje
// “NO ALCANZA”, se lleva todo lo que hay; se muestra lo que se lleva y el galpón queda vacío.
// Se muestra al final de la jornada cuantos cajones hay en el galpón (Stock final), y cuantos
// cajones ingresaron y cuantos cajones salieron en toda la jornada. Ejemplo:

// ┌─────────────┬───────────┬────────────────┬────────────────┐
// │  Movimiento │  Cantidad │  Stock Inicial │  Stock Final   │
// ├─────────────┼───────────┼────────────────┼────────────────┤
// │ Ingreso     │ 10        │ 50             │ 60             │
// │ Egreso      │ 20        │ 60             │ 40             │
// │ Ingreso     │ 15        │ 40             │ 55             │
// │ Egreso      │ 60        │ 55             │ NO ALCANZA     │
// └─────────────┴───────────┴────────────────┴────────────────┘

let stock = 50;
let stockIngreso = 0;
let stockEgreso = 0;

const max = 20;
const min = -20;
for (let i = 0; i < 50; i++) {
    let N = Math.round(Math.random() * (max - min)) + min;

    if (N < 0 && stock === 0) {
        console.log('NO ALCANZA: El galpón esta vació.');
    } else if (N < 0 && stock < Math.abs(N)) {
        // prettier-ignore
        console.log(`NO ALCANZA: Se lleva todo lo que hay (${stock}) y el galpón queda vacío`)
        stockEgreso += stock;
        stock = 0;
    } else {
        if (N < 0) {
            console.log(`Quitando ${N} del stock de ${stock}`);
            N = Math.abs(N);
            stock -= N;
            stockEgreso += N;
        } else if (N > 0) {
            console.log(`Agregando ${N} al stock de ${stock}`);
            stock += N;
            stockIngreso += N;
        }
    }
}
console.log(`Stock final: ${stock}
Stock ingresado ${stockIngreso}
Stock egresado ${stockEgreso}`);
