// verificando números ímpares ou pares !
const readline = require ("readline-sync");
console.log("Verificando números !");

let numeroVerificar = Number(readline.question("Digite um número para ser verificado: "));
let numeroVeficado;

if (numeroVerificar %2 == 0) {
    numeroVeficado = "par";
}
else{
    numeroVeficado = "ímpar";
}

console.log("O número inserido foi verificado com sucesseso!");
console.log("O número", numeroVerificar, "é um número", numeroVeficado);