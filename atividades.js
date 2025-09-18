   //atividade 1
   var idade = 12
    console.log ("ATIVIDADE 1:");
    if (idade >= 18) {
      console.log("Você é maior de idade.");
    } else {
      console.log("Você é menor de idade.");
    }
    console.log ("  ");

    //atividade 2
    console.log ("ATIVIDADE 2:" );

    var idade = 12;
  
  if (idade < 16) {
    console.log("Você não pode votar.");
  } else if (idade >= 16 && idade < 18 || idade > 70) {
    console.log("Voto opcional.");
  } else {
    console.log("Você pode votar.");
  }
  console.log ("  ");

  //atividade 3
  console.log ("ATIVIDADE 3:");
  var nota1 = 3;
  var nota2 = 8;
  var nota3 = 5;
  
  var media = (nota1 + nota2 + nota3) / 3;

  if (media >= 6) {
    console.log("Aprovado! Sua média foi: " + media);
  } else {
    console.log("Reprovado! Sua média foi: " + media);
  }
  console.log ("  ");

  //atividade 4
  console.log ("ATIVIDADE 4:");
  var numero = 4;
  
  if (numero >= 0) {
    console.log("O número é positivo.");
  } else {
    console.log("O número é negativo.");
  }
  console.log ("  ");

  //atividade 5
  console.log ("ATIVIDADE 5:");
  var numero = 2;
  
  if (numero % 2 === 0) {
    console.log("O número é par.");
  } else {
    console.log("O número é ímpar.");
  }
  console.log ("  ");

  //atividade 6
  console.log ("ATIVIDADE 6:");

  var idade = 15;
  
  if (idade < 13) {
    console.log("Criança");
  } else if (idade < 18) {
    console.log("Adolescente");
  } else if (idade < 60) {
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }
  console.log ("  ");

  //atividade 7
  console.log ("ATIVIDADE 7:");

  var num1 = 21;
  var operacao = "/";
  var num2 = 7;
  var resultado;

  if (operacao === "+") {
    resultado = num1 + num2;
  } else if (operacao === "-") {
    resultado = num1 - num2;
  } else if (operacao === "*") {
    resultado = num1 * num2;
  } else if (operacao === "/") {
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      console.log("Erro! Não é possível dividir por zero.");
    }
  } 
 console.log("Resultado: " + resultado);



