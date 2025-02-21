// Soma de vavriáveis !
const readline = require("readline-sync");
console.log("Somando Números !")
let primeiroNumero = Number(readline.question("Digite o primeiro número: "));
let segundoNumero = Number(readline.question("Digite o segundo número: "));

console.log("A soma dos números inseridos é:  ", primeiroNumero + segundoNumero);