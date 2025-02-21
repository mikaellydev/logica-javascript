// Tabuada do número inserido
const readline = require ("readline-sync");

console.log("Fazendo a tabuada de um número!")

let numeroInserido = Number(readline.question("Digite um número para visualizar uma tabuada: "))

for (let i = 0; i <= 10; i++) {
    console.log(numeroInserido ,"X", i ,"=", (numeroInserido*i));
}