const rl = require("readline-sync")

const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

const pergunta = rl.question("Digite a palavra que deseja achar o indice no array: ")

console.log(array.indexOf(pergunta), array.length)