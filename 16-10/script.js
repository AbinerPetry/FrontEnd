// Seleciona o parágrafo e o botão usando getElementByID

const meuParagrafo = document.getElementById('texto'); // no documento html, pegue o elemento que tem o ID 'texto'

const meuBotao = document.getElementById('meuBotao'); // no documento html, pegue o elemento que tem o ID 'Meubotao'

const Botao = document.getElementById('Botao'); 

const Botao2 = document.getElementById('Botao2'); 

const Botao3 = document.getElementById('Botao3'); 

// Defina a função que alterna o conterna o contéudo do parágrafo
function alterarTexto(){

    //textoContent altera o conteudo de texto de algum elemento html
   


    if(meuParagrafo.textContent === 'Clique no botão para mudar este texto'){
        meuParagrafo.textContent = 'o texto foi alterado!';
        
    } else {
    meuParagrafo.textContent = 'Clique no botão para mudar este texto';

    }

   
}

meuBotao.addEventListener('click',alterarTexto);

function aaaaaaaaaa(){
    
    meuParagrafo.style.color = 'red' ;
}

Botao.addEventListener('click',aaaaaaaaaa);


function iii(){
    
    Botao2.style.backgroundColor = 'red' ;
}

Botao2.addEventListener('click',iii);


function xx(){
    


    if(imagem.style.display === 'none'){
       imagem.style.display = 'block';
        
    } else {
        imagem.style.display = 'none';

    }




}

Botao3.addEventListener('click',xx);

/*









    Botao3.imagem.style.display = 'blok'


// adiciona um event listener ao botão para escutar o clique






/*
click: ocorre quando o elemento é clicado 
dblclick: ocorre quendo o elemento é clicado duas vezes
mousedown: ocorre quendo o botão do mause é pressionado
mouseup: ocorre quendo o  botão do mause é solto
mouseover:  ocorre quendo o cursor do mause passa sobre o elemeento
maouseout:  ocorre quendo o  cursor do mouse sai de cima do elemento
mausemover:  ocorre quendo o  cursor do mouse é movido dentro do elemento*/


// altere a funsão 'alterarTexto' para  que, toda vez que clicar, o texto altera entre 'clique aqui' e  'o texto foi alterado!'. dica voce vai ter que usar if e else para isso. 
