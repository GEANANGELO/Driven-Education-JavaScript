
let cont = 0; //variavel de controle
/*while(condição for verdadeira)faça{
    BLOCO DE CODIGO
}  */
while(cont <= 100){
    console.log(cont)
    cont++
}

//REPETIÇÃO COM WHILE
function umBridge(){
    let cont = 0;
    let frase = "";
    while(cont < 10){
        frase +="--mentir tira a confiança--"; //frase=frase + "texto"
        cont++  //cont=cont + 1;
    }
    return frase;
}
console.log(umBridge());

//REPETIÇÃO COM FOR
function umBridge(){    
    let frase = "";
               //cont=cont + 1;
    for(let cont=0;cont < 10; cont++ ){
        frase +="--mentir tira a confiança--"; //frase=frase + "texto"
        
    }
    return frase;
}
console.log(umBridge());