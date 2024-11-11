//primeiro , pego os elementos que vou usar
const botao = document.getElementById('botao1')
const titulo = document.getElementById('titulo1')

//depois, crio a função que faz o que eu quero
function trocaCor () {
    titulo.style.color= '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//por ultimo, adicionamos o evento que vai disparar a nossa função e ai , executar o que quemos
botao.addEventListener('click',trocaCor) //addEventListener serve para adicionar um evento e chamar nossa função


const botao2 = document.getElementById('botao2')

function exibiMensagem () {
    alert('Você clicou duas vezes!')
}

botao2.addEventListener('dblclick',exibiMensagem)


const botao3 = document.getElementById('botao3')

function alteraFundo () {
    document.body.style.backgroundColor= '#' + Math.floor(Math.random() * 16777215).toString(16);
}

botao3.addEventListener('contextmenu',alteraFundo)


const titulo2 = document.getElementById('tecla')


function teclaPressionada (event) {
  titulo2.textContent = `Telha pressionada: ${event.key}`
}

document.addEventListener('keydown',teclaPressionada)


function frase () {
   alert('E ai cpx!')
  }

  setInterval(frase, 5000) //esse chama infinitamente

  //setTimeout(frase,3000)//esse chama uma vez só