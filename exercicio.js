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
//exercicio 7
let refeição = 42.54 
let conta1 = 42.54/100 
let conta2 = conta1*10 
let conta3 = refeição+conta2 
console.log("o valor total foi de " +conta3+ " ja somado a gorjeta do carçom de " +conta2)
let format = conta3.toFixed(1)
console.log(format)
// exercicio 8
const compra = 100.98
const pago = 150.00
let troco = pago - compra
console.log("Troco no valor de " +troco)
let valorArredondado = Math.ceil(troco)
console.log(valorArredondado)
//ecercicio 9
let anoNascimento = +prompt("Qual ano voce nasceu? ")
let anoAtual = 2021
let cauculoIdade = 2021-anoNascimento
console.log(cauculoIdade+" Você está na flor da idade")
//exercicio 10
let valorReais = +prompt("Digite a quantidade de reais: ")
let dolar1 = valorReais/5.42
let euro1 = valorReais/6.32
let libraEsterlina1 = valorReais/7.38
let dolarCanadense1 = valorReais/4.22
let pesoArgentino1 = valorReais/0.056
let pesoChileno1 = valorReais/0.0069
console.log()
console.log(`R$ ${valorReais} se convertem em ${dolar1.toFixed(2)} dolar`)
console.log(`R$ ${valorReais} se convertem em ${euro1.toFixed(2)} euros`)
console.log(`R$ ${valorReais} se convertem em ${libraEsterlina1.toFixed(2)} libra esterlina`)
console.log(`R$ ${valorReais} se convertem em ${pesoArgentino1.toFixed(2)} libra canadense`)
console.log(`R$ ${valorReais} se convertem em ${pesoChileno1.toFixed(2)} Pesos argentinos`)
console.log(`R$ ${valorReais} se convertem em ${pesoChileno1.toFixed(2)} Pesos Chilenos`)
console.log(`R$ ${dolar1.toFixed(2)}`);
//exercicio 11
let valorAluguel = 1000
let valorReajuste = (1000/100)*31
let valorTotal = valorAluguel+valorReajuste
console.log(`valor do reajuste ${valorReajuste}`)
console.log(`valor total ${valorTotal}`)
//exercicio 12
let valorAluguel = 1000
let valorReajuste = (1000/100)*99
let valorTotal = valorAluguel+valorReajuste
console.log(`valor do reajuste ${valorReajuste.toFixed(2)}`)
console.log(`valor total ${valorTotal.toFixed(2)}`)


