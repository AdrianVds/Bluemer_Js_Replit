// //EXEMPLO FUNÇAO

// //// Nesse momento, estou declarando a função, ou seja, ensinando para o meu programa o que ele tem que fazer toda vez que essa função for chamada.
// //// Isso é feito usando o comando "function"

// // function funcaoTeste(){
// //   console.log("Essa é a primeira linha de execução da minha função");
// //   console.log("Essa é a segunda");
// //   console.log("Depois eu executo essa");
// //   console.log("Poderia ter um cálculo ou outra coisa aqui dentro");
// //   console.log("Inclusive poderia ter um if, já que o Bruno perguntou.");
// //   console.log("É isso pessoal, obrigado!!");
// // }

// //// Aqui, depois de ter ensinado, estou "chamando" a função, ou seja, mandando ela ser executada.
// // funcaoTeste();


// function saudacao(){
//   let nome = prompt("Qual é o seu nome? ");
//   let idade = prompt("E a sua idade?");
//   console.log(`Olá ${nome}, seja bem-vindo(a)!`);
//   if (idade >= 18) {
//     console.log("Vou te pagar uma cerveja!!");
//   } else {
//     console.log("Vou te pagar uma coca!");
//   }
// }

// let entrada = prompt("Deseja chamar a função??? ");

// if (entrada ==="S") {
//   saudacao();
// } else {
//   console.log("Blz, obrigado.");
/////////////////////////////
// //// Crie uma função chamada calculadora, ela vai receber 2 números (como argumentos!) que devem ser pedidos para o usuário fora da função, e então perguntar o que deve executar: soma ou multiplicação. No final, deve exibir o resultado.
/////////////////////////////////////////////
// function calculadora(numero1,numero2){
//   let calculo =prompt("Qual calculo pretende fazer? soma ou multiplicaçao: ");
//   if(calculo === "soma"){
//     let conta = numeroo1+numeroo2;
//     console.log(`${numero1}, somado a ${numero2} é igual a ${conta}`);
//   }else if(calculo ==="multiplicaçao"){
//     let conta1 = numeroo1*numeroo2
//     console.log(`${numero1}, multiplicado a ${numero2} é igual a ${conta1}`);
//   }else{
//       console.log("digite novamente");
//   }
// }
// let numeroo1 = +prompt("Digite um numero: ");
// let numeroo2 = +prompt("Digite outro numero: ");
// calculadora(numeroo1,numeroo2);
////////////////////////////////////
// //criei toda a função e depois pego os valores entao ela executa oq pede para poder executar
