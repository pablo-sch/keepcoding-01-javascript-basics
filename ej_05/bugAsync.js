// Este programa simula una llamada asincrónica para obtener un usuario

/*
function obtenerUsuario(id) {
    let usuario;
    setTimeout(() => {
        if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
        }
    }, 2000);
    return usuario;
}
const usuario = obtenerUsuario(1)
*/

//FIX================================================================================================+
function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let usuario;
            if (id === 1) {
                usuario = { id: 1, nombre: 'John Doe' };
            }
            resolve(usuario)
        }, 2000);
    })
}

obtenerUsuario(1)

.then(usuario => {
    console.log(usuario);
})