const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
]

/*
DesarrolladoresJavascript 
[
    {
        "id": 1,
        "nombre": "Juan",
        "habilidades": ["JavaScript", "HTML", "CSS"],
        "proyectos": [
            { "id": 1, "nombre": "Proyecto 1" },
            { "id": 2, "nombre": "Proyecto 2" }
        ]
    }
]

NombresProyectos 
['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5', 'Proyecto 6']
*/

const desarrolladoresJavascript = () => {

    /*
     const index = datos.habilidades.indexOf('JavaScript') >= 0
     const filter = datos.filter(index)
     return filter
    */

    /*
    const listaDesarrolladoresJS = datos.filter((item) => {
        return (item.habilidades.indexOf('JavaScript') >= 0)
    });
    return listaDesarrolladoresJS
    */

    //return datos.filter((item) => (item.habilidades.indexOf('JavaScript') >= 0));
    return datos.filter(({habilidades}) => (habilidades.indexOf('JavaScript') >= 0));

    
};

const nombresProyectos = () => {

    /*
    const nombresProyectos = datos.map(dato => dato.proyectos.map(proyecto => proyecto.nombre));
    const merge = nombresProyectos.flat(1)
    return merge
    */

    /*
    const nombresProyectos = datos.flatMap(dato => dato.proyectos.map(proyecto => proyecto.nombre));
    return nombresProyectos
    */

    //return datos.flatMap(dato => dato.proyectos.map(proyecto => proyecto.nombre))
    return datos.flatMap(({proyectos}) => proyectos.map(({nombre}) => nombre))

};

/*
const desJS = datos.filter((item) => {
    return (item.habilidades.indexOf('JavaScript') >= 0)
});

const nomProy = datos.flatMap((dato) => {
    return dato.proyectos.map(proyecto => {
        proyecto.nombre
    });
});

const desJS2 = datos.filter((item) => { (item.habilidades.indexOf('JavaScript') >= 0) });
const nomProy2 = datos.flatMap((dato) => { dato.proyectos.map(proyecto => { proyecto.nombre }) });

const desJS3 = datos.filter(item => (item.habilidades.indexOf('JavaScript') >= 0));
const nomProy3 = datos.flatMap(dato => dato.proyectos.map(proyecto => proyecto.nombre));
*/

desarrolladoresJavascript();
nombresProyectos();