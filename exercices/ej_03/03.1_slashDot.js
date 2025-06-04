const lista_1 = ['Downloads', 'Videos', 'Capture', 'mp4',] //Downloads/Videos/Capture.mp4
const lista_2 = ['CodinGame', 'python', 'py',] //CodinGame/python.py
const lista_3 = ['Programming', 'Languages', 'Easy', 'Beginner', 'Useful', 'PythonStuff', 'Py',] //Programming/Languages/Easy/Beginner/Useful/PythonStuff.Py

//Strings============================================================================================+
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const juntar_y_reparar_string = (lista) => {
    let new_string = lista.join('/')
    const fixed_string = new_string.replaceAt(new_string.lastIndexOf('/'), '.')
    return fixed_string
}

//Mediante Arrays y Strings (Nº1)===================================================================+
const juntar_y_reparar_lista = (lista) => {

    let f_string = lista.join(',')
    let array = f_string.split(/(,)/) //<--- Error al uzar slash -> (/(/)/)
    array[array.lastIndexOf(',')] = '.'

    let s_string = array.join('')
    s_string = s_string.replaceAll(',', '/')

    return s_string
}

//Mediante Arrays y Strings (Nº2)===================================================================+
const juntar_y_reparar_lista2 = (lista) => {

    //Opcion Nº3.
    
    //let lista_padre = [...lista]

    //let lista_hijo = []
    let new_array = []

    let new_string = ''

    for (let i = 0; i < lista.length; i++) {

        new_array.push(lista[i])
        //lista_hijo = [...lista_hijo, lista_padre[i]]

        if (i < lista.length - 2) {
            new_array.push('/')
            //lista_hijo = [...lista_hijo, '/']
        } else if (i < lista.length - 1) {
            new_array.push('.')
            //lista_hijo = [...lista_hijo, '.']
        }
    }
    
    /*
        for (let i = 0; i < lista_padre.length; i++) {

        lista_hijo.push(lista_padre[i])
        //lista_hijo = [...lista_hijo, lista_padre[i]]

        if (i < lista_padre.length - 2) {
            lista_hijo.push('/')
            //lista_hijo = [...lista_hijo, '/']
        } else if (i < lista_padre.length - 1) {
            lista_hijo.push('.')
            //lista_hijo = [...lista_hijo, '.']
        }
    }
    */

    new_string = new_array.join('')
    return new_string
}

console.log('Mediante Strings:')//Opción Nº1.
console.log(juntar_y_reparar_string(lista_1))
console.log(juntar_y_reparar_string(lista_1))
console.log(juntar_y_reparar_string(lista_1))

console.log('Mediante Arrays y Strings Nº1:')//Opción Nº2.
console.log(juntar_y_reparar_lista(lista_1))
console.log(juntar_y_reparar_lista(lista_1))
console.log(juntar_y_reparar_lista(lista_1))

console.log('Mediante Arrays y Strings Nº2:')//Opción Nº3.
console.log(juntar_y_reparar_lista2(lista_1))
console.log(juntar_y_reparar_lista2(lista_2))
console.log(juntar_y_reparar_lista2(lista_3))


