// Ejercicio 2: Añadir un método al objeto auto que devuelva una cadena con la descripción del auto.

const auto = {
    marca: 'Toyota',
    modelo: 'Sprinter Trueno',
    año: 1983,
    desc: function () {
        return `El auto ${this.marca} ${this.modelo}, tambien conocido como AE86, es un pequeño cupé ligero o hatchback introducido por ${this.marca} en ${this.año} como parte de la quinta generación del ${this.marca} Corolla. También es conocido como "Hachi-Roku (ハチロク)", por 8 y 6 en japonés, gracias al Manga/Anime "頭文字D/ Initial D". `;
    }
};
