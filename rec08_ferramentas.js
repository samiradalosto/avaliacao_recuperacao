const entrada = require("readline-sync");

const ferramentas = [];

for (let i = 0; i < 4; i++) {
  console.log(`\nCadastro da ferramenta ${i + 1}`);

  const nome = entrada.question("Nome: ");
  const quantidade = entrada.questionInt("Quantidade em estoque: ");
  const minimo = entrada.questionInt("Estoque minimo: ");

 
  const ferramenta = {
    nome,
    quantidade,
    minimo
  };

  ferramentas.push(ferramenta);
}

console.log("\n=== RELATÓRIO DE ESTOQUE ===");

for (let i = 0; i < ferramentas.length; i++) {
  const item = ferramentas[i];

  let situacao;
  if (item.quantidade < item.minimo) {
    situacao = "REPOR😒";
  } else {
    situacao = "ESTOQUE SUFICIENTE🤓";
  }

  console.log(`\nFerramenta: ${item.nome}`);
  console.log(`\nQuantidade: ${item.quantidade}`);
  console.log(`\nMínimo: ${item.minimo}`);
  console.log(`\nSituação: ${situacao}`);
}