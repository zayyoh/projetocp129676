var parar = 0;
while(parar == 0){
  console.log("")
console.log("Temos 2 opções de encomendas: salgados ou docinhos;");
console.log("Digite 1 para pedir docinhos ou 2 para pedir salgados");
var compras = prompt("");

console.log("");

var encomenda;
var quantidade;
var valor;
var sabor;

if(compras == 1 || compras == "1"){
console.log("Digite BG para brigadeiro ou BJ para beijinho");
sabor = prompt("");

switch (sabor){

  case "BG":
    quantidade = prompt("Digite a quantidade de brigadeiros:");
    valor = quantidade * 2;
    encomenda = "Brigadeiro";
    for(e = 0; e < 3; e++){
console.log("");
}

var contagem = 0;
while(contagem < 5){
  console.log("Processando encomenda...");
  contagem++;
}

for(e = 0; e < 3; e++){
console.log("");
}

var pedido = [encomenda, quantidade, valor];
var inf = ["Produto", "Quantidade", "Valor"];
var k = 0;
console.log("Pedido Realizado:");
do{
  console.log(inf[k]+": "+pedido[k]);
  k++;
} while (k < 3);

for(e = 0; e < 2; e++){
console.log("");
}

console.log("Pagamento online somente por pix");
console.log("Deseja pagar por pix?");
var pix = prompt("S/N");
if(pix == "s" || pix == "S"){
  console.log("Parabéns, ganhou 5% de desconto!");
  pedido[2] -= pedido[2] * 0.05;
  console.log("Preço total: "+pedido[2]);
}else{
  console.log("Pagamento por cartão ou dinheiro somente na retirada.");
}

for(e = 0; e < 2; e++){
console.log("");
}

console.log("Encomenda pronta para retirada em aproximadamente 2 horas.")
console.log("Obrigado por encomendar conosco.");

  break;


  case "BJ":
    quantidade = prompt("Digite a quantidade de beijinhos:");
    valor = quantidade * 2;
    encomenda = "Beijinho";
    for(e = 0; e < 3; e++){
console.log("");
}

var contagem = 0;
while(contagem < 5){
  console.log("Processando encomenda...");
  contagem++;
}

for(e = 0; e < 3; e++){
console.log("");
}

var pedido = [encomenda, quantidade, valor];
var inf = ["Produto", "Quantidade", "Valor"];
var k = 0;
console.log("Pedido Realizado:");
do{
  console.log(inf[k]+": "+pedido[k]);
  k++;
} while (k < 3);

for(e = 0; e < 2; e++){
console.log("");
}

console.log("Pagamento online somente por pix");
console.log("Deseja pagar por pix?");
var pix = prompt("S/N");
if(pix == "s" || pix == "S"){
  console.log("Parabéns, ganhou 5% de desconto!");
  pedido[2] -= pedido[2] * 0.05;
  console.log("Preço total: "+pedido[2]);
}else{
  console.log("Pagamento por cartão ou dinheiro somente na retirada.");
}

for(e = 0; e < 2; e++){
console.log("");
}

console.log("Encomenda pronta para retirada em aproximadamente 2 horas.")
console.log("Obrigado por encomendar conosco.");


  break;
  default:
  ("falha");
}
}else if(compras == 2 || compras == "2"){
console.log("Digite BQ para bolinha de queijo ou CF para coxinha de frango");
sabor = prompt("");
switch (sabor){
  case "BQ":

    quantidade = prompt("Digite a quantidade de bolinhas de queijo:");
    valor = quantidade * 1.50;
    encomenda = "Bolinha de queijo";
for(e = 0; e < 3; e++){
console.log("");
}

var contagem = 0;
while(contagem < 5){
  console.log("Processando encomenda...");
  contagem++;
}

for(e = 0; e < 3; e++){
console.log("");
}

var pedido = [encomenda, quantidade, valor];
var inf = ["Produto", "Quantidade", "Valor"];
var k = 0;
console.log("Pedido Realizado:");
do{
  console.log(inf[k]+": "+pedido[k]);
  k++;
} while (k < 3);

for(e = 0; e < 2; e++){
console.log("");
}

console.log("Pagamento online somente por pix");
console.log("Deseja pagar por pix?");
var pix = prompt("S/N");
if(pix == "s" || pix == "S"){
  console.log("Parabéns, ganhou 5% de desconto!");
  pedido[2] -= pedido[2] * 0.05;
  console.log("Preço total: "+pedido[2]);
}else{
  console.log("Pagamento por cartão ou dinheiro somente na retirada.");
}

for(e = 0; e < 2; e++){
console.log("");
}

console.log("Encomenda pronta para retirada em aproximadamente 2 horas.")
console.log("Obrigado por encomendar conosco.");
  break;
  case "CF":

    quantidade = prompt("Digite a quantidade de coxinhas de frango:");
    valor = quantidade * 1.50;
    encomenda = "Coxinha de frango";

    for(e = 0; e < 3; e++){
console.log("");
}

var contagem = 0;
while(contagem < 5){
  console.log("Processando encomenda...");
  contagem++;
}

for(e = 0; e < 3; e++){
console.log("");
}

var pedido = [encomenda, quantidade, valor];
var inf = ["Produto", "Quantidade", "Valor"];
var k = 0;
console.log("Pedido Realizado:");
do{
  console.log(inf[k]+": "+pedido[k]);
  k++;
} while (k < 3);

for(e = 0; e < 2; e++){
console.log("");
}

console.log("Pagamento online somente por pix");
console.log("Deseja pagar por pix?");
var pix = prompt("S/N");
if(pix == "s" || pix == "S"){
  console.log("Parabéns, ganhou 5% de desconto!");
  pedido[2] -= pedido[2] * 0.05;
  console.log("Preço total: "+pedido[2]);
}else{
  console.log("Pagamento por cartão ou dinheiro somente na retirada.");
}

for(e = 0; e < 2; e++){
console.log("");
}

console.log("Encomenda pronta para retirada em aproximadamente 2 horas.")
console.log("Obrigado por encomendar conosco.");
  break;
  default:
  ("falha");
}
}else if (compras != 1 && compras != 2){
console.log("Tente novamente;");
}

}