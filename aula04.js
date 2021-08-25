let lista = ["adrian","vinicius","thiago","augusto","joao","pedro","jeraldinho"]
count = 1
for (let percorre of lista){
 console.log(`agora a ordem ${count} esta em ${percorre}`)
 count+=1
}
// / exercicio 2
let lista = [1,2,3,4,5,6,7]
count = 1
for (let percorre of lista){
 count = 1
 let soma = percorre + count
 console.log(`${percorre}+${count} = ${soma} `)
}
//exercicio 3
let numero1 = +prompt("Digite um numero: ")
let numero2 = +prompt("Digite um numero: ")
let numero3 = +prompt("Digite um numero: ")
let lista = []
lista.push(numero1)
lista.push(numero2)
lista.push(numero3)
console.log(lista)
