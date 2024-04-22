const rl = require("readline-sync")

const array = ["pizza", "chocolate", "acai", "sorvete", "pastel"]


console.log(array)
console.log("essas sao as minhas comidas preferidas: ")
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])


const comidaUsuario = rl.question("Qual a sua comida preferida: ")

array[1] = comidaUsuario

console.log(array)