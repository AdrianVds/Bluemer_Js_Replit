//Faça um programa que tenha uma função chamada voto() que vai receber como parâmetro o ano de nascimento de uma pessoa, 
//retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:
function voto(nome,numero){
  if(idade >= 18 && idade <= 50){
    console.log(`${nome}, Voce tem ${idade} anos,seu voto é OBRIGATORIO`)
    if(idade === 50){
      console.log(`${nome}, falta um ano para ter o seu voto OPCIONAL`)
    }
  }else if(idade < 18){
    console.log(`${nome}, Voce tem ${idade} anos,seu voto foi NEGADO`)
    if(idade === 17){
      console.log(`${nome}, voce podera votar no proximo ano`)
    }
  }else if (idade >= 51){
    console.log(`${nome}, Voce tem ${idade} anos,seu voto é OPCIONAL`)
  }else
    console.log("Erro,Digite novamente!")
}
let nome = prompt("Digite seu nome: ")
let idade = +prompt("Digite sua idade: ")
voto(nome,idade)