//primeiro , pego os elementos que vou usar
const botao = document.getElementById('botao1')
const titulo = document.getElementById('titulo1')

//depois, crio a função que faz o que eu quero
function trocaCor () {
    titulo.style.color= '#' + Math.floor(Math.random() * 167772115).toString(16);
}

//por ultimo, adicionamos o evento que vai disparar a nossa função e ai , executar o que quemos
botao.addEventListener('click',trocaCor) //addEventListener serve para adicionar um evento e chamar nossa função
