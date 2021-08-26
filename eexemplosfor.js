condição em for of
var lista = [10,20,30,40,50]
for( let item of lista){
   console.log(item)

  if (item < 30){
    console.log(`${item}é menor que 30`)
  }else{
    console.log("é menor que trinta")

  }
}
for in
for ( let item in lista){
  let novno = prompt(`novvo valor ${item}`)
  lista.splice(item,1,novno)
}
console.log(lista)
ex 3
for (let i = 1; i <20; i+=1){
  console.log(i)
}
exmp
sair = "não"
variavel condiçao incremento
for (let i = 1; sair != "sim"; i+=10){
  console.log(`${i}`)
  sair = prompt("deseja sair?")
}
exemplos
var numeros = 0
for (let i = 0; i < 3; i+=1){
  numeros += +prompt("digite um numero: ")
}
console.log(numeros)
var data = +prompt('digite o ano que voce nasceu: ')
for (var data1 = 2022; (data)<(data1); anos++ ){
anos = data++
console.log(anos)
}