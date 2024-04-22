const rl = require("readline-sync")

const nome = rl.question("Qual o seu nome: ")
const email = rl.question("Qual e o seu email: ")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)