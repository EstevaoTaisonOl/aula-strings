const rl = require("readline-sync")

const listaDeTarefas = []

const pergunta1 = rl.question("Me diga a primeira tarefa que voce tenha que fazer: ")
const pergunta2 = rl.question("Me diga a segunda tarefa que voce tenha que fazer: ")
const pergunta3 = rl.question("Me diga a terceira tarefa que voce tenha que fazer: ")

listaDeTarefas.push(pergunta1)
listaDeTarefas.push(pergunta2)
listaDeTarefas.push(pergunta3)

console.log(listaDeTarefas)

const tirar = rl.question("digite um indice de 0,1 ou 2 para tirar da lista: ")

listaDeTarefas.splice(tirar, 1)

console.log(listaDeTarefas)