//FUNCAO COM CONDIÇÃO IF e ELSE
function calculaMedia(n1, n2, n3, n4,faltas){
    let media = (n1 + n2 + n3 + n4)/4;
    let aprovado= "APROVADO! sua media é  = " + media;
    let reprovado= "REPROVADO! sua media é  = " + media + " ,estude mais";
    
    if(media >= 7 && faltas <10 ){
        return aprovado;
    } else{
        return reprovado;
    }
}
//calculaMedia(4, 6 , 8, 10);
console.log(calculaMedia(4, 6 , 8, 10,10));

     //outro modo de fazer
//FUNCAO COM CONDIÇÃO IF e ELSE
function calculaMedia(n1, n2, n3, n4,faltas){
    let media = (n1 + n2 + n3 + n4)/4;
    let aprovado= (media >= 7) ;
    let aprovadoPresenca= (faltas <10);
    
    if(!aprovadoPresenca){
        return "reprovado por presença";
    }
    
    if(aprovado && aprovadoPresenca){
        return "APROVADO! sua media é  = " + media;
    } else{
        return "REPROVADO! sua media é  = " + media + " ,estude mais";
    }
}
//calculaMedia(4, 6 , 8, 10);
console.log(calculaMedia(4, 6 , 8, 10,10));


// FUNÇÃO PARA CLASSIFICAÇÃO
function classificacao(vestibular,enem){
    let aprovadoVestibular = (vestibular >= 7);
    let aprovadoEnem = (enem >= 700)
    
    /*
      !true  => false
      !false => true
    */
    if(!aprovadoVestibular){

    }

    if(aprovadoVestibular || aprovadoEnem ){
        return "Classificado";
    } else{
        return "Desclassificado";
    }
}

console.log(classificacao(5, 700));

