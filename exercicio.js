//Exercício 1
console.log("o primeiro programa a gente nunca esquece");
console.log("-----------------------------------------");
//exercicio 2
console.log("adrian vinicius dos santos \nrua ibicatu ;\ncep-86600-000, tell 996110448");
console.log("-----------------------------------------");
//exercicio 3
console.log("Mina, seus cabelo é da hora \nSeu corpão violão \nMeu docinho de coco \nTá me deixando louco");
console.log("-----------------------------------------");
//exercicio 4
let nota1 = +prompt("digite a nota de ALINE")
let nota2 = +prompt("digite a nota de MARIO")
let nota3 = +prompt("digite a nota de SERGIO")
let nota4 = +prompt("digite a nota de SHIRLEY")
console.log("ALUNO (A) NOTA \n========= ====", "\nALINE       " +nota1, "\nMÁRIO       " +nota2, "\nSÉRGIO      " +nota3, "\nSHIRLEY     " +nota4)
console.log("-----------------------------------------")
//exercicio 5
console.log('Cadastro de Clientes');
console.log('0 – Fim');
console.log('1 - Inclui');
console.log('2 - Altera');
console.log('3 - Exclui');
console.log('4 - Consulta')
const opcao = prompt("Digiter uma opçao");
console.log("sua escolha foi " +opcao);
//exercicio 6
let valor = +prompt("Quantidade de vida de um monstro (entre 10 e 50);");
let valor1 = +prompt("Valor do ataque do jogador por turno (entre 5 e 10)");
let danoCausado = valor - valor1;
console.log("o monstro tem ainda " +danoCausado+ " de vida");
let rodadas = danoCausado/valor1;
console.log("Voce precisara causar esse dano novamente por mais " +rodadas+ " vezes");