
/////////////////////////////////////
var conte = 0
var conte1 = 0
empates = 0
jogar()
function jogar(){
var rodadas = +prompt("Digite rodadas: ")
for (let i = 0; i < rodadas; i+=1){
  var escolha = prompt("Digite sua opção: ")
  var computador = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
if (computador === 0){
    computador = "pedra"
}else if (computador === 1){
    computador = "papel" 
}else if (computador === 2){
    computador = "tesoura"
}
console.log(computador)
if (escolha === computador){
  empates+=1
  console.log("ouve empate")
}else if (escolha === "papel" && computador === "pedra"){
  conte+=1
  console.log("Voce ganhou")
}else if (escolha === "pedra" && computador === "tesoura"){
  conte+=1
  console.log("voce ganhou")
}else if (escolha === "tesoura" && computador === "papel"){
  conte+=1
  console.log("voce ganhou")
}else {
  conte1+=1
  console.log("voce perdeu")
}
}
console.log(`Voce fez ${conte} pontos`)
console.log(`computador fez ${conte1} pontos`)
console.log(`ouve ${empates} empates`)
}
function jogarNovamente(){
var jogarpartida = prompt("deseja jogar novamente?")
while (jogarpartida === "sim"){
  jogar()
  jogarNovamente()
}
}
jogarNovamente()
