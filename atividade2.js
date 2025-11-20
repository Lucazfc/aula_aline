//exercício 1
console.log("exercício 1");
function cofre(moeda){
    if(moeda>=100){
    console.log("você pode fugir!");
    console.log("e restou:", moeda-100,"moedas");
}else{
    console.log("você nao tem moedas necessárias, e nao pode fugir!");
}
}
cofre(509);

//exercício 2
console.log("exercício 2");
function podermagico(pedra){
    console.log("seu poder com a pedra é de :", pedra**3);
}
podermagico(3)

//exercicio 3
console.log("exercício 3");
function vampiro(ncasa){
    var raiz = ncasa**0.5
    if(Number.isInteger(raiz)){
    console.log("Pode entrar")
}else{
    console.log("nao pode entrar");
}
}
 vampiro(4)

 //exercicio 4
 console.log("exercício 4");
function treino(dias){
    forçainicial=1
    força = forçainicial+dias*5
    console.log("no dia",dias, "você obteve",força,"de força");
}
treino(5)

//exercicio 5
console.log("exercício 5");
 function Torre(andar){
while (andar>=0){
    console.log(andar);
    andar--;
}
 }
 Torre(10)