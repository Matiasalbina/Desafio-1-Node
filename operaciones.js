const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    const nuevaCita = { nombre, edad, animal, color, enfermedad };

    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf-8');
    console.log(`Cita para ${nombre} ha sido registrada.`);
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log("Citas Registradas:");
    console.log(citas);
}

module.exports = { registrar, leer };
