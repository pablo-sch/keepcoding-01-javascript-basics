/*
const calcularPromedio = (numeros) => {
    let sumaTotal = 0

    for (let i = 0; i <= numeros.length; i++) {
        sumaTotal = sumaTotal + numeros[i]
        //sumaTotal += numeros[i]
    }

    const promedio = sumaTotal / numeros.length
    return promedio
}

const listaNumeros = [1, 2, 3, 4, 5]
const promedioNumeros = calcularPromedio(listaNumeros)
*/

const calcularPromedio = (numeros) => {
    let sumaTotal = 0

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal = sumaTotal + numeros[i]
    }

    const promedio = sumaTotal / numeros.length
    return promedio
}

const listaNumeros = [1, 2, 3, 4, 5]
const promedioNumeros = calcularPromedio(listaNumeros)

//listaNumeros [1,2,3,4,5]//numeros
//listaNumeros [0,1,2,3,4]//index