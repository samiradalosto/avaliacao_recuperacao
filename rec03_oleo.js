const entrada = require("readline-sync");
const nivel = entrada.questionFloat("\nDigite o nivél de óleo (ml): ")

console.log('nível informado: ${nivel} ml');

if (nivel >= 40 && nivel <= 80){
    console.log("nível normal🤓")
}else{
    console.log("INSPEÇÃO NECESSÁRIA!🧐")
}