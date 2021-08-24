let lista = ["adrian","vinicius","thiago","augusto","joao","pedro","jeraldinho"]
count = 1
for (let percorre of lista){
 console.log(`agora a ordem ${count} esta em ${percorre}`)
 count+=1
}
/ exercicio 2
let lista = [1,2,3,4,5,6,7]
count = 1
for (let percorre of lista){
 count = 1
 let soma = percorre + count
 console.log(`${percorre}+${count} = ${soma} `)
}
ex 2