// Cálculo de salario de empleados:

// Escriba un programa en JavaScript para calcular el salario y mostrar el detalle de los empleados de una fábrica. Los empleados tienen un sueldo básico común y se adiciona un 10% por cada aumento de categoría, un 5% por cada año de antigüedad. A todos los empleados se les descuenta un 11% por aportes jubilatorios y un 4% por obra social, ambos del sueldo básico. Finalmente, se añade un aumento fijo de $200 en concepto de salario familiar por cada hijo menor de 18 años. El programa deberá contar con una función denominada Aumento y una función denominada Descuentos.

const prompt = require('prompt-sync')();

const Aumento = (sueldoBasico, categoria, antiguedad) => {
    const aumentoCategoria = sueldoBasico * (categoria * 0.1);

    const aumentoAntiguedad = sueldoBasico * (antiguedad * 0.05);

    return aumentoCategoria + aumentoAntiguedad;
};

const Descuentos = (sueldoBasico) => {
    const descuentoJubilatorio = sueldoBasico * 0.11;

    const descuentoObraSocial = sueldoBasico * 0.04;

    return descuentoJubilatorio + descuentoObraSocial;
};

const calcularSalario = () => {
    const sueldoBasico = parseFloat(prompt('Ingrese el sueldo básico común: '));

    const categoria = parseInt(
        prompt('Ingrese la categoría del empleado (número entero): ')
    );

    const antiguedad = parseInt(prompt('Ingrese los años de antigüedad: '));

    const hijos = parseInt(
        prompt('Ingrese la cantidad de hijos menores de 18 años: ')
    );

    const totalAumento = Aumento(sueldoBasico, categoria, antiguedad);

    const totalDescuentos = Descuentos(sueldoBasico);

    const salarioFamiliar = hijos * 200;

    const sueldoBruto = sueldoBasico + totalAumento;

    const sueldoNeto = sueldoBruto - totalDescuentos + salarioFamiliar;

    console.log(`
Sueldo Básico: $${sueldoBasico.toFixed(2)}
Aumento por Categoría: $${(
        totalAumento -
        sueldoBasico * antiguedad * 0.05
    ).toFixed(2)}
Aumento por Antigüedad: $${(sueldoBasico * antiguedad * 0.05).toFixed(2)}
Total Aumento: $${totalAumento.toFixed(2)}
Descuento por Jubilación: $${(sueldoBasico * 0.11).toFixed(2)}
Descuento por Obra Social: $${(sueldoBasico * 0.04).toFixed(2)}
Total Descuentos: $${totalDescuentos.toFixed(2)}
Salario Familiar: $${salarioFamiliar.toFixed(2)}
Sueldo Bruto: $${sueldoBruto.toFixed(2)}
Sueldo Neto: $${sueldoNeto.toFixed(2)}`);
};

let continuar = true;

while (continuar) {
    calcularSalario();

    const respuesta = prompt(
        '¿Desea ingresar otro empleado? (s/n): '
    ).toLowerCase();
    if (respuesta !== 's') {
        continuar = false;
        console.log('Fin del cálculo de salarios.');
    }
}
