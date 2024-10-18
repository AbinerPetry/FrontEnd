const Botao = document.getElementById('meuBotao'); 
const img = document.getElementById('minhaImagem'); 

function corDEfundo(){
    document.body.style.backgroundColor = 'white' ;

}

let numeroCliques = 0;
    
function cliques(){

numeroCliques++;
contador.textContent = `Número de cliques: ${numeroCliques}`;
}

Botao.addEventListener('click', cliques)
Botao.addEventListener('click',corDEfundo)



function aumentaImagem(){

    img.style.width = '2009px'

}


function diminuiImagem(){

    img.style.width = '100px'

}

img.addEventListener('mouseover',aumentaImagem)
img.addEventListener('mouseout',diminuiImagem)


