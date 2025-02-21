// Perguntando o nome ao usuário
const readline = require("readline-sync");
let nomeUsuario = String(readline.question("Qual seu nome? "));
console.log("Olá", nomeUsuario, "seja bem-vindo(a)!")