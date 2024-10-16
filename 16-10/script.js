// Seleciona o parágrafo e o botão usando getElementByID

const meuParagrafo = document.getElementById('texto'); // no documento html, pegue o elemento que tem o ID 'texto'

const meuBotao = document.getElementById('meuBotao'); // no documento html, pegue o elemento que tem o ID 'Meubotao'

const Botao = document.getElementById('Botao'); 

const Botao2 = document.getElementById('Botao2'); 

// Defina a função que alterna o conterna o contéudo do parágrafo
function alterarTexto(){

    //textoContent altera o conteudo de texto de algum elemento html
    meuParagrafo.textContent = 'o texto foi alterado!';


function aaaaaaaaaa(){
    
    meuParagrafo.style.color = 'red' ;
}


function iii(){
    
    Botao2.style.backgroundColor = 'red' ;
}




// adiciona um event listener ao botão para escutar o clique

meuBotao.addEventListener('click',alterarTexto);
Botao.addEventListener('click',aaaaaaaaaa);
Botao2.addEventListener('click',iii);

/*
click: ocorre quando o elemento é clicado 
dblclick: ocorre quendo o elemento é clicado duas vezes
mousedown: ocorre quendo o botão do mause é pressionado
mouseup: ocorre quendo o  botão do mause é solto
mouseover:  ocorre quendo o cursor do mause passa sobre o elemeento
maouseout:  ocorre quendo o  cursor do mouse sai de cima do elemento
mausemover:  ocorre quendo o  cursor do mouse é movido dentro do elemento*/
