function calculaMedia(n1, n2, n3, n4){
    let media = (n1 + n2 + n3 + n4)/4;
    let aprovado= "APROVADO! sua media é  = " + media;
    let reprovado= "REPROVADO! sua media é  = " + media + " ,estude mais";
    
    if(media < 7){
        return reprovado;
    } else{
        return aprovado;
    }
}
//calculaMedia(4, 6 , 8, 10);
console.log(calculaMedia(3, 6 , 8, 10));


//FUNCAO COM CONDIÇÃO ANINHADA
function calculaMedia(n1, n2, n3, n4){
    let media = (n1 + n2 + n3 + n4)/4;
    let aprovado= "APROVADO! sua media é  = " + media;
    let reprovado = "REPROVADO! sua media é  = " + media + " ,estude mais";
    let recuperacao = "RECUPERAÇÃO! sua media é  = " + media ;
    if(media < 5){
        return reprovado;
    } else if(media >= 5 && media < 7){
        return recuperacao;
    } else{
        return aprovado;
    }
}
//calculaMedia(0, 5 , 8, 10);
console.log(calculaMedia(0, 0, 8, 10));
console.log(calculaMedia(0, 2, 8, 10));
console.log(calculaMedia(7,6, 8, 10));