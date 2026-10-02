const entrada = require("readline-sync");

function calcularAproveitamento(util, total) {
  return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
  if (percentual >= 90) {
    return "EXCELENTE";
  } else if (percentual >= 75) {
    return "ADEQUADO";
  } else {
    return "REVISAR PROCESSO";
  }
}

const quantidadeTotal = entrada.questionFloat("Quantidade total: ");
const quantidadeUtil = entrada.questionFloat("Quantidade util: ");

const percentual = calcularAproveitamento(quantidadeUtil, quantidadeTotal);
const classificacao = classificarAproveitamento(percentual);

console.log("\n=== RELATÓRIO DE APROVEITAMENTO ===");
console.log(`Quantidade total: ${quantidadeTotal}`);
console.log(`Quantidade útil: ${quantidadeUtil}`);
console.log(`Aproveitamento: ${percentual.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);