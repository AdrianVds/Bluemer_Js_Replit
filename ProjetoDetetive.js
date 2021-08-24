//Projeto Detetive
let nome = prompt("Ola,o seu nome,fazendo um favor: ");
console.log(`${nome}\n(Responda apenas s/n) `);
console.log("------------------------------------------");
function detetive(pgt1,pgt2,pgt3,pgt4,pgt5){
  conte = 0
  if (pgt1 === "s"){
    conte+=1
  }if (pgt2 === "s"){
    conte+=1
  }if (pgt3 === "s"){
    conte+=1
  }if (pgt4 === "s"){
    conte+=1
  }if (pgt5 === "s"){
    conte+=1
  }console.log("OK,obrigado");
  console.log("------------------------------------------")
  console.log(conte);
}

function envolvimento(detetive){
  if (conte === 5){
    console.log("Assassino");
  }else if (conte === 3){
    console.log("Cumplice");
  }else if (conte === 4){
    console.log("Cumplice");
  }else if (conte === 2){
    console.log("Suspeita");
  }else{
    console.log("Inocente");
  }
}

let pergunta1 = prompt(`${nome}, telefonou para a vítima? `).toLowerCase();
let pergunta2 = prompt(`Esteve no local do crime? `).toLowerCase();
let pergunta3 = prompt(`Mora perto da vítima? `).toLowerCase();
let pergunta4 = prompt(`Devia para a vítima? `).toLowerCase();
let pergunta5 = prompt(`Já trabalhou com a vítima? `).toLowerCase();

detetive(pergunta1,pergunta2,pergunta3,pergunta4,pergunta5);
envolvimento(detetive);