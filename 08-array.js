
function familia(){       
             //indice[    0   ,  1     ,   2    ,   3  ,    4]   
    let familiaSp = ['joaquin','nayara','bedica','eudes','carol'];
    return familiaSp[0].toUpperCase();
    
}
console.log(familia());
console.log(familia().length);



//COMBINANDO FUNÇÃO E LAÇO
function familia(){       
            //indice[    0   ,  1     ,   2    ,   3  ,    4]   
    let familiaSp = ["joaquin","nayara","bedica","eudes","carol"];   
    let texto ="";
    
    for(let i = 0; i < familiaSp.length ; i++){
        texto = console.log(`O familiar ${i} é ${familiaSp[i]}`)                   
    }
    return texto;
    //return familiaSp;
        
}

console.log(familia());


function somarTodos(lista){
    let soma = 0;

    for(let i = 0; i < lista.length ; i++){
        soma = soma + lista[i];
    }
    return soma;        
}

console.log(somarTodos([10,20,30]));



function alunitos (){
    var alunos = ['Ana', 'Bia', 'Carlos']

    for(let contagem = 0 ; contagem < alunos.length ; contagem++){
        var resposta = console.log(`O aluno ${contagem} ${alunos[contagem]}`)
    }
    return resposta
}

console.log(alunitos());
