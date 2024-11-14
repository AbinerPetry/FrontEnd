function responder (correta) {
    if(correta) {
       questoes[perguntaAtiva].classList.remove('ativa')
       perguntaAtiva += 1
       ativar()
       placar.innerHTML = `Pontuação: ${perguntaAtiva}`;
    }

    else{
        setInterval(() => {
            goFullScreen();
            exibirErro();
        },300)


    }
}

function exibirErro() {
    const telaCheiaErro = document.getElementById('telaCheiaErro');
    const somErro = document.getElementById('somErro');

    telaCheiaErro.style.display = 'flex';

    somErro.play();

    telaCheiaErro.addEventlistener('click', () => {
        telaCheiaErro.style.display = 'none';
        sairTelaCheia();
    })
}

function goFullScreen() {
    const elem = document.documentElement;
    if(elem.requestFullscreen) {
        elem.requestFullscreen();
    }else if (elem.mozRequestFullScreen){
        elem.mozRequestFullScreen();
    }else if (elem.webkitRequestFullScreen){
        elem.webkitRequestFullScreen();
    }else if (elem.msRequestFullScreen){
        elem.msRequestFullScreen();
    }
}

function sairTelaCheia() {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    }else if (document.mozCancelFullScreen){
        document.mozCancelFullScreen();
    }else if (document.webkiExitFullScreen){
        document.webkiExitFullScreen();
    }else if (document.msExitFullScreen){
        document.msExitFullScreen();
    }
}

let perguntaAtiva = 0;
const questoes = document.querySelectorAll('.questao')

function ativar(){
    questoes[perguntaAtiva].classList.toggle('ativa')
}
