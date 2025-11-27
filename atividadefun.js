function compra(desconto){
    if (desconto>=100){
        console.log("sua compra final foi de", desconto-desconto/10, "reais e teve", desconto/10, "reais de desconto");
} else{
    console.log("não teve desconto e vc deve pagar", desconto, "reais");
}
}
 compra(100);