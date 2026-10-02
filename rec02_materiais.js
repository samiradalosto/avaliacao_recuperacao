const entrada = require("readline-sync");
const produto = entrada.question("\nQual é o nome do produto:");
const quantidade = entrada.questionInt("\nQual froi a quantidade comprada:");
const precoUnitario = entrada.questionFloat("\nPreço unitário: R$");

const total = quantidade * precoUnitario;

console.log("\n=== RE$SUMO DA COMPRA ===");
console.log(`produto: ${produto}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preco unitario: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor total: R${total.toFixed(2)}`);