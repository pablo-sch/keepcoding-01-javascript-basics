const input1 = 'string' //6 gnirts
const input2 = 'variable' //8 elbairav
const input3 = 'pointer' //7 retniop

//Strings============================================================================================+
console.log('Mediante Strings:')

const revertString = (string) => {
    const new_string = (string + ' ' + string.length).split("").reverse().join("")
    return new_string;
}

console.log(revertString(input1))
console.log(revertString(input2))
console.log(revertString(input3))

//Arrays=============================================================================================+
console.log('Mediante Arrays:')

const revertArray = (string) => {
    let new_array = string;
    new_array = new_array.split('')
    new_array.push(' ',string.length)
    new_array.reverse()
    const new_string = new_array.join("")
    
    return new_string
}

console.log(revertArray(input1))
console.log(revertArray(input2))
console.log(revertArray(input3))



