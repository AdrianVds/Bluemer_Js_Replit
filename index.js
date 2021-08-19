//Escreva um programa que receba o ano de nascimento do usuário, e apresente na tela se ele é maior ou menor de idade
let anoNascimento = +prompt("Digite seu ano de nascimento: ");
let idade = 2021 - anoNascimento;
if (idade > 18) {
   console.log("então ja é maior de idade")
}else if (idade === 18){
   console.log("voce tem 18 anos")
}else {
   console.log("voce ainda é menor de idade")
}