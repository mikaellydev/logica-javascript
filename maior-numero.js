// Informar qual é o maior número inserido
const readline = require("readline-sync");
console.log("Verificar qual o maior de dois números!")

let numero1 = Number(readline.question("Insira um número para a verificação: "));

let numero2 = Number(readline.question("Insira outro número para a verificação: "));

if (numero1 > numero2){
    console.log("O maior número entre", + numero1, "e", + numero2, "é", + numero1);
}
else{
    console.log("O maior número entre", + numero1, "e", + numero2, "é", + numero2);
}