// 7. En un hospital se ha hecho un estudio sobre los pacientes registrados durante los últimos 10 años, con el objeto de hacer una aproximación de los costos de internación por paciente.
// Se obtuvo un costo promedio diario según el tipo de enfermedad que aqueja al paciente.
// La siguiente tabla expresa los costos diarios, según el tipo de enfermedad:
//
// | Tipo de Enfermedad | Costo/Paciente/Día |
// |--------------------|--------------------|
// | 1                  | 125                |
// | 2                  | 116                |
// | 3                  | 120                |
// | 4                  | 132                |
// | 5                  | 138                |
//
// Construya un algoritmo que calcule e imprima el costo total que representa un paciente.
const prompt = require('prompt-sync')();

const costoPorDia = {
    1: 125,
    2: 116,
    3: 120,
    4: 132,
    5: 138,
};

const pacientes = [
    {
        nombre: 'Sofia Rodríguez',
        tipoEnfermedad: 1,
        diasInternacion: 2,
    },
    {
        nombre: 'Martín Gómez',
        tipoEnfermedad: 5,
        diasInternacion: 23,
    },
    {
        nombre: 'Juan Carlos',
        tipoEnfermedad: 4,
        diasInternacion: 15,
    },
];

console.log('Lista de pacientes:');

pacientes.forEach((paciente, index) => {
    console.log(`${index + 1}. ${paciente.nombre}`);
});

const paciente =
    Math.abs(prompt('Ingrese el número del paciente a calcular: ')) - 1;

if (paciente >= pacientes.length) {
    console.log('ERROR: Paciente no encontrado.');
} else {
    const nombrePaciente = pacientes[paciente].nombre;
    const tipoEnfermedadPaciente = pacientes[paciente].tipoEnfermedad;
    const diasInternacionPaciente = pacientes[paciente].diasInternacion;

    const costoDiario = costoPorDia[tipoEnfermedadPaciente];
    const costoTotal = costoDiario * diasInternacionPaciente;

    console.log(`
- Paciente seleccionado: ${nombrePaciente}

- Tipo de enfermedad: ${tipoEnfermedadPaciente}
- Dias restantes de internación: ${diasInternacionPaciente}

- Costo diario: ${costoDiario}
- Costo total: ${costoTotal}`);
}
