const entrada = require("readline-sync");
const funcoes = require("./funcoesOrcamento");

const cliente = entrada.question("Nome do cliente: ");
const valorMateriais = entrada.questionFloat("Valor dos materiais (R$): ");
const horasServico = entrada.questionFloat("Horas de servico: ");

const valorMaoDeObra = funcoes.calcularMaoDeObra(horasServico);
const valorTotal = funcoes.calcularTotal(valorMateriais, horasServico);
const situacaoDesconto = funcoes.verificarDesconto(valorTotal);

console.log("\n=== RELATÓRIO DE ORÇAMENTO ===");
console.log(`Cliente: ${cliente}`);
console.log(`Valor dos materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Valor da mão de obra: R$ ${valorMaoDeObra.toFixed(2)}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
console.log(`Situação do desconto: ${situacaoDesconto}`);
console.log("🥰".repeat(10));