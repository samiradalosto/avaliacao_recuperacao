const entrada = require("readline-sync");

let soma = 0;

for (let i = 1; i <= 6; i++) {
    const medicao = entrada.questionFloat(`Digite a medição ${i}: `);
    soma += medicao;
}

const media = soma / 6;

console.log("\n=== RESULTADO DAS MEDIÇÕES ===");
console.log(`Soma das medições: ${soma}`);
console.log(`Média final: ${media}`);