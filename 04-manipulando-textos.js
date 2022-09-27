function apresentar(nome){
    let texto = "olá " + nome + " josé";
    return texto;
}
//apresentar(alfredo);
console.log(apresentar('alfredo'));



function calculaMedia(n1, n2, n3, n4){
    let media = ((n1*2) + (n2*2) + (n3*3) + (n4*4))/4;
    let resultado= "a media é  = " + media;
    return resultado;
}
//calculaMedia(4, 6 , 8, 10);
console.log(calculaMedia(4, 6 , 8, 10));
