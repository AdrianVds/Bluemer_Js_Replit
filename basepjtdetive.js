conte = 0;
let primeiraPergunta = prompt("conhecia a ela? ");
if (primeiraPergunta === "s"){
  conte+=1
  console.log("ok");
}else{
  console.log("ok");
}
let segundaPergunta = prompt("esteva no dia? ");
if (segundaPergunta === "s"){
  conte+=1
  console.log("ok");
}else{
  console.log("ok");
}
let terceiraPergunta = prompt("Esteve com ela? ");
if (terceiraPergunta === "s"){
  conte+=1
  console.log("ok");
}else{
  console.log("ok");
}
console.log(conte);
if(conte ===3){
  console.log("Culpada");
}else if(conte ===2){
  console.log("suspeita");
}
else
  console.log("inocente");