const lista_1 = ['Downloads', 'Videos', 'Capture', 'mp4',] //Downloads/Videos/Capture.mp4
const lista_2 = ['CodinGame', 'python', 'py',] //CodinGame/python.py
const lista_3 = ['Programming', 'Languages', 'Easy', 'Beginner', 'Useful', 'PythonStuff', 'Py',] //Programming/Languages/Easy/Beginner/Useful/PythonStuff.Py

//Strings============================================================================================+
console.log('Mediante Strings:')//Opción Nº1.

String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const juntar_y_reparar_string = (lista) => {
    let new_string = lista.join('/')
    const fixed_string = new_string.replaceAt(new_string.lastIndexOf('/'), '.')
    return fixed_string
}

console.log(juntar_y_reparar_string(lista_1))
console.log(juntar_y_reparar_string(lista_1))
console.log(juntar_y_reparar_string(lista_1))

//Mediante Arrays y Strings (Nº1)===================================================================+
console.log('Mediante Arrays y Strings Nº1:')//Opción Nº2.

const juntar_y_reparar_lista = (lista) => {

    let f_string = lista.join(',')
    let array = f_string.split(/(,)/) //<--- Error al uzar slash -> (/(/)/)
    array[array.lastIndexOf(',')] = '.'

    let s_string = array.join('')
    s_string = s_string.replaceAll(',', '/')

    return s_string
}

console.log(juntar_y_reparar_lista(lista_1))
console.log(juntar_y_reparar_lista(lista_1))
console.log(juntar_y_reparar_lista(lista_1))

//Mediante Arrays y Strings (Nº2)===================================================================+
console.log('Mediante Arrays y Strings Nº2:')//Opción Nº3.

const juntar_y_reparar_lista2 = (lista) => {

    //Opcion Nº3.
    let lista_padre = [...lista]

    let lista_hijo = []
    let new_string = ''

    for (let i = 0; i < lista_padre.length; i++) {

        lista_hijo.push(lista_padre[i])

        if (i < lista_padre.length - 2) {
            lista_hijo.push('/')
        } else if (i < lista_padre.length - 1) {
            lista_hijo.push('.')
        }
    }
    new_string = lista_hijo.join('')
    return new_string
}

console.log(juntar_y_reparar_lista2(lista_1))
console.log(juntar_y_reparar_lista2(lista_2))
console.log(juntar_y_reparar_lista2(lista_3))


