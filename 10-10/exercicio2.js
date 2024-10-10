// exercicio 1 - loop whitle e condicionais

let tempo = 10;


while (tempo >= 0){

    if(tempo == 0){

        console.log('BOOOOM')
    }

   else if(tempo % 2 == 0){

    console.log('tic')}

   else {
    console.log('tac')}

tempo--;
}

// exercicio 2

function imprimirTabuada (numero) {

    for (let i = 1; i <= 10; i++){
        
        console.log(`${numero} X ${i} = ${numero * i}`);
    }

}

imprimirTabuada (5)
