const estudiante = {
    nombre: 'Pablo',
    apellidos: 'Abaroa Schilling',
    modulo: [
        ['Node.js', "2025-01-01"],
        ['Git', "2025-02-02"],
        ['react', "2025-03-03"],
    ],
    busqueda_activa: true,
};

//const [clase, fecha] = estudiante.modulo[2]
/*
const moduloReact = estudiante.modulo[2].join(' ')
console.log(moduloReact)
*/

console.log(estudiante.modulo[2].join(' '));

/*
const { modulo : [h] } = {
    nombre: 'Pablo',
    apellidos: 'Abaroa Schilling',
    modulo: [
        ['Node.js', "2025-01-01"],
        ['Git', "2025-02-02"],
        ['react', "2025-03-03"],
    ],
    busqueda_activa: true,
}
*/

/*
const estudianteReact = () => {
    //const string = `<h2>${estudiante.modulo[2][0]} ${estudiante.modulo[2][1]}</h2>`;
    //const string = (estudiante.modulo[2][0]) + ' ' + (estudiante.modulo[2][1])
    //const string = `<h2>${estudiante.modulo[2].join(' ')}</h2>`;S
    //const string = estudiante.modulo[2].join(' ')

    //const string = modulo[2].join(' ')
    const string = modul.join(' ')

    return string
}
    console.log(estudianteReact())
*/



