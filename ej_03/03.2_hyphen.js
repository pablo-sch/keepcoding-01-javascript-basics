const input = 10 //1-0
const second_input = 1 //1
const third_input = 11234 //1-1-2-3-4

//Strings y Arrays==================================================================================+
const add_hyphen_array = (data) => {
    const new_array = [...data]
    const string = new_array.toString().split('').join("-")
    return string
}

console.log('Mediante Strings y Arrays:')
console.log(add_hyphen_array(input))
console.log(add_hyphen_array(second_input))
console.log(add_hyphen_array(third_input))

