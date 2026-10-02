const entrada = require("readline-sync");

const vibracao = entrada.questionfloat("\nDigite a vibração do equipamento: ")

let classificacao;

if (vibracao <= 3 ){
    classificacao = "NORMAL";
} else if (vibracao <=3 && vibracao >=6){
    classificacao = "ATENÇÃO";
} else{
    classificacao = "CRÍTICA"
}

console.log("\n=== Situação do equipamento ===");
console.log(`vibracao: ${vibracao}`);
console.log(`classificação: ${classificacao}`);